### Framework alternatives and comparision :
- [Meteor vs Sails][meteor-sails]

### Structuring meteor project :
- Meteor exampels on github
- [Best practices in meteor file structure and code organization ][meteor-structure-01]
- [3 things you should know about meteor structure][meteor-structure-02]
- [Large meteor apps structure][large-app-structure]
- [Meteor data flow][meteor-data-flow]
- [Template level subscription][template-subscription]
- [Using admin app as microservice][admin-microservice]

### Desgin patterns and planning :
- Flux design pattern

### Git :
- [Git branch model][git-branch-model]
- [Feature branch workflow][feature-branch]
- [Rebase or merge ? ][rebase-vs-merge]

### Using EcmaScript6 :
- [Using ES6 in meteor][es6-meteor]
- [Ecmascript](https://atmospherejs.com/meteor/ecmascript) and [es5-shim](https://atmospherejs.com/meteor/es5-shim) are in meteor apps by default now
- [Real world ES6 examples][es6-meteor-examples]

### Subscription & Publications :
- [Optimizing subscriptions][optimize-subs]
- [Workaround for deep merging conflicting subscriptions][deep-merge-workaround]


### Deployment :
- Using mupx with env configuration and settings.json
- [Using CDNs with meteor][meteor-cdns]


### Security : 
- [Meteor Security 101][security-101]
- [Meteor Security 201][security-201]
- [Meteor & Security: Setting the Record Straight][security-sacha]
 
### Methods and Latency compensation :
- [Methods vs client side operations][methods-vs-operations]
- [Latency Compensation][latency-compensation]
- [Advanced Latency Compensation][advanced-latency-compensation]

----------------

### Uncategorized : 
- [Meteor collections allow/deny vs methods][collection-access-vs-methods]
- [Common meteor mistakes][common-mistakes]
- [Meteor Guards - Happy Debugging!][meteor-guards]




[meteor-sails]: http://stackoverflow.com/questions/22202286/sails-js-vs-meteor-what-are-the-advantages-of-both
[meteor-structure-01]: http://fourkitchens.com/blog/article/structuring-meteor-applications
[meteor-structure-02]:https://www.codementor.io/meteor/tutorial/3-things-know-structure-meteor-application
[collection-access-vs-methods]:https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/
[git-branch-model]:http://nvie.com/posts/a-successful-git-branching-model/
[large-app-structure]:https://blog.tableflip.io/large-meteor-projects-best-practices/
[feature-branch]:https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[rebase-vs-merge]:https://www.atlassian.com/git/tutorials/merging-vs-rebasing/workflow-walkthrough
[es6-meteor]:https://medium.com/@dferber90/es6-in-meteor-5e088c998e4a#.bz00j0ilk
[es6-meteor-examples]:https://medium.com/@dferber90/real-world-es6-examples-in-meteor-a834c6073daa#.nz33itce5
[meteor-data-flow]:https://medium.com/meteor-js/data-flow-from-the-database-to-the-ui-three-layers-of-meteor-d5e208b466c3#.ogmg2zu8h
[template-subscription]:https://www.discovermeteor.com/blog/template-level-subscriptions/
[optimize-subs]:https://meteorhacks.com/meteor-subscription-optimizations/
[common-mistakes]:https://dweldon.silvrback.com/common-mistakes
[deep-merge-workaround]:https://medium.com/@MaxDubrovin/workaround-for-meteor-limitations-if-you-want-to-sub-for-more-nested-fields-of-already-received-docs-eb3fdbfe4e07#.nafqguvkd
[meteor-guards]:https://dweldon.silvrback.com/guards
[security-101]:http://joshowens.me/meteor-security-101/
[security-201]:http://joshowens.me/meteor-security-201/
[methods-vs-operations]:https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/
[latency-compensation]:https://www.discovermeteor.com/blog/latency-compensation/
[advanced-latency-compensation]:https://www.discovermeteor.com/blog/advanced-latency-compensation/
[security-sacha]:https://www.discovermeteor.com/blog/meteor-and-security/
[meteor-cdns]:http://joshowens.me/using-a-cdn-with-your-production-meteor-app/
[admin-microservice]:http://joshowens.me/building-an-admin-app-as-a-microservice-with-meteor-js/
