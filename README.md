# Aura perf demo app

[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com)

Enable Debug Mode for current user

## Perf 1
WARNING: [Performance degradation] markup://aura:if ["3:313;a"] in c:perf1 ["1:313;a"] needed to clear unrendered body.
More info: https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/perf_warnings_if.htm
Component hierarchy: [one:one]>[one:appLayoutHost]>[one:standardLayoutContainer]>[force:singlePaneWindowManager]>[force:pageHost]>[one:auraContainer]>[c:perf1]

## Perf 2
aura_proddebug.js:36694 WARNING: [Performance degradation] markup://aura:iteration [id:5:251;a] in c:perf2 ["1:251;a"] had multiple items set in the same Aura cycle.
More info: https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/perf_warnings_iteration.htm
Component hierarchy: [one:one]>[one:appLayoutHost]>[one:standardLayoutContainer]>[force:singlePaneWindowManager]>[force:pageHost]>[one:auraContainer]>[c:perf2]

## Perf 3
On a list update, all items are rerendered
Beware aura:if
https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_render_handler.htm

## Perf 4
Storable actions
https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm
