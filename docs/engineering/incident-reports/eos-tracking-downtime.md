---
id: eos-tracking-downtime
title: EOS Order Tracking Downtime
sidebar_label: Incident Report - EOS Order Tracking Downtime
description: Describes the downtime we had for EOS order tracking.
---

## Impact

All mobile and desktop users were impacted. We had a total of 1 day of missing transactions in the production history server.

Switching the history server to stage DB solved the issue immediately and resolved incomplete orders.

## Root Cause Analysis

DevOps opened an issue opened with AWS (#yyy, #x) to discover a reason why database instance would stop writing data. AWS did not report any problems on their side.

The best idea we have to explain the issue is that we hit the networking volume limit set to 1Gbps for `r5.large` instances. All DB instances have been upgraded to `r5.xlarge` to remove the networking volume bottleneck.

## Time To Restore

- Incident Reported Timestamp: 13:07 UTC on June 24, 2020
- History Traffic Switched to Stage: 14:41 UTC on June 24, 2020
- Root Cause Identified: 14:03 UTC on June 28, 2020
- Upgrade to Large Instances: 14:25 UTC on June 28, 2020
- Restoring Missing Data on Prod: 07:59 UTC on June 28, 2020
- Finished Restored of Prod Data: 07:14 UTC on July 07, 2020
- Total Impact Time: >1 day
- Total Time Since Escalation: 2.5h

## Risk of Future Occurrence

Medium-High; until we address the steps outlined below.

## Mitigation Steps

- If the limiting factor (network volume) is correct, the risk is lower.
- We need to improve writing speed (currently it takes days to replenish one day of missing data)
- Improve error reporting (we don't know how yet, but the server should stop if it cannot write data to DB)
- We can compare the stage to the production DB to detect missing data in realtime.

