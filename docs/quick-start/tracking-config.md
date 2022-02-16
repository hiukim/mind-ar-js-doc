---
id: tracking-config 
title: Tracking Config 
sidebar_label: Tracking Config 
---

import {customFields} from '/docusaurus.config.js';
import useBaseUrl from '@docusaurus/useBaseUrl';
import cardImage from '@site/static/img/demo/card.png'

MindAR comes with the following configurable parameters to fine tune the tracking.

## Smoothing Control

Jittering is a common issue in AR applications. The library computes the position of the targets in every frames. The problem is that there are always slight variations across aframes (e.g. noises coming from camera input or computational errors) even though you may think you are holding the devices steadily. Result is that the augmented contents will appear shaky.

One solution to smooth the jittering is to apply filtering. At a high level, it means taking some kind of rolling average of multiple frames to position the targets. The contents will then appeared more stable. 

However, smoothing also comes with a price. Since we are using the previou N frames to interpolate the position, there will be a delay for the content to move to the latest position. This is more obvious if you move the camera quickly.

MindAR implements <a href="https://jaantollander.com/post/noise-filtering-using-one-euro-filter/" target="_blank">OneEuroFilter</a>. There are two adjustable parameters called cutoff frequency (`filterMinCF`) and speed coefficient (`filterBeta`). In general, decreasing the value of `filterMinCF` can reduce the jittering and increaseing the value of `filterBeta` reduce the delay. They are, however, somehow fighting against each others.

They default values of `filterMinCF` and `filterBeta` are 0.001 and 1000. You can change them by specifying these parameters in `mindar-image` attribute. e.g.

```
<a-scene mindar-image="filterMinCF:0.1; filterBeta: 10"/>
```

## WarmUp Tolerance

By default, there is a small intentional delay to trigger the `target found event` to avoid false positive. More specifically, it requires the target image being detected in a continous of `warmupTolerance` frames to be considered a success. The default value of `warmupTolerance` is 5, and you can change it by specifying this parameter in the `mindar-image` attribute, e.g.

```
<a-scene mindar-image="warmupTolerance: 1"/>
```

## Miss Tolerance

Similar, there is also a small intentional delay to trigger the `target lost event`. It requires the target image being un-detected in a continuous of `missTolerance` frames. The default value of `missTolerance` is 5, and you can change it by specifying this parameter in the `mindar-image` attribute, e.g.


```
<a-scene mindar-image="missTolerance: 1"/>
```
