---
id: eos-tracking-downtime
title: EOS Order Tracking Downtime
sidebar_label: Incident Report - EOS Order Tracking Downtime
description: Describes the downtime we had for EOS order tracking.
---

## Impact

For customers that initiated `X ---> EOS` exchanges, the EOS wallet did not see incoming EOS transactions (in a period of one day). Since we need incoming transactions to complete orders, the lost transactions made exchanges stuck in-progress, never to be completed. While customers did get their EOS funds, their orders never resolved.

All mobile and desktop users were impacted. We had a total of 1 day of missing transactions in the production history server.

Switching the history server to stage DB solved the issue immediately and resolved incomplete orders.

## Root Cause Analysis

The issue started when AWS DocumentDB production database stopped storing data ([screenshot-1](https://files.slack.com/files-pri/T0CKC63J6-F015S9CKEF8/__________________________2020-06-24____16.17.10.png) and [screenshot-2](https://files.slack.com/files-pri/T0CKC63J6-F016BNA2M9P/screen_shot_2020-06-24_at_4.49.02_pm.png)). The production indexer did not report on any errors - it was effectively throwing data into a black hole.

DevOps (Victor B.) opened an issue opened with AWS (#7125177371, #7133921591) to discover a reason why database instance would stop writing data. AWS did not report any problems on their side.

The best idea we have to explain the issue (Victor B.) is that we hit the networking volume limit set to 1Gbps for `r5.large` instances. All DB instances have been upgraded to `r5.xlarge` to remove the networking volume bottleneck.

## Time To Restore

- Incident Reported Timestamp: 13:07 UTC on June 24, 2020
- History Traffic Switched to Stage: 14:41 UTC on June 24, 2020
- `X ---> EOS` Exchanges Enabled: 20:27 UTC on June 27, 2020
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

## References

- Slack Thread: https://exodusio.slack.com/archives/C0142UATNG7/p1593004020171100
