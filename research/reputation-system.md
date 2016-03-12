### [Pros and cons of ranking system for a user generated content](https://www.quora.com/What-are-some-pros-and-cons-of-implementing-a-badge-point-or-ranking-system-for-a-website-that-thrives-on-user-generated-content)


### [Generating and Facilitating Engaging and Effective Online Discussions](http://tep.uoregon.edu/technology/blackboard/docs/discussionboard.pdf) :
#### Workload :

- Update your FAQ frequently
- Respond to and read the discussions frequently (specially at the beginning)
- Preempting questions, could that be in another section in our case ?
- Discourage the usage of Emails, Chats for the goals the discussion board is created for

#### Establish guidelines :

- Be specific about Do and Do nots
- State the level of formality
- Naming conventions
- What is expected before using the system


### [Analyzing StackOverflow point system](http://www.cs.cmu.edu/~ymovshov/Papers/asonam_2013.pdf) :
- Compared to Yahoo! Answers and other QA communities, it's shown that reputation system of SO is one of the factors that made it one of the most powerful  QA communities .
 > Tausczik and Pennebaker [11] showed that user reputation is consistently related to the perceived quality of their answer

- Users are rewarded more reputation for giving good answers than for asking good questions. (see table 1)

- 62% of the dataset have answers marked as accepted answers

- SO Schema encourages users to make better answers than better questions
  *This could be a nice approach to encourage the students more to help each other instead of trying to get help and leave*

- Still some users gains points by asking many questions, but the low points gained by upvoting the questions will make the user who make this approach easily detected by having a lot of **low quality questions** which can be handled by administrators .

### [Discovering Value from Community Activity on Focused Question Answering Sites: A Case Study of Stack Overflow](https://www.cs.cornell.edu/home/kleinber/kdd12-qa.pdf)


### [Wikipedia's reputation system **wikiTrust**](Reputation Systems for Open Collaboration)

### [Immunizing Online Reputation Reporting Systems Against Unfair Ratings and Discriminatory Behavior **More focused on eShopping**](http://sieci.pjwstk.edu.pl/media/bibl/%5BDellarocas%5D_%5BImmunizing%20Online%5D_%5BACM%5D_%5B2000%5D.pdf)

### [Web-Based Reputation Management Systems: Problems and Suggested Solutions](http://download.springer.com/static/pdf/986/art%253A10.1023%252FA%253A1011557319152.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1023%2FA%3A1011557319152&token2=exp=1457807183~acl=%2Fstatic%2Fpdf%2F986%2Fart%25253A10.1023%25252FA%25253A1011557319152.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1023%252FA%253A1011557319152*~hmac=cf2301f32ea79d2ff83a26e7ca501b963bd818d8bf610372bee92c6236d3e25d)

#### Main problems :
1. Equations that do not accurately reflect reputation.
2. Starting reputation is set low which may be a barrier to entry.
3. There is no incentive to rate others.
4. There is no ability to filter or search by reputation score.
5. Use of a single general reputation score.
6. Most systems have an unlimited memory.


#### What we care about :
2. Barrier to entry :
   Where new users who have low reputation can't access a lot of services and can't gain score easily, we still don't want to allow everybody to be able to gain score without deserving it, but still in need to give the new user who have good skills and contribution to raise up his reputation .    

   Proposed Solutions :
   - Giving new users a some starting rep based on the mean average of user points

3. No incentive to rate others :
  That could be a problem, What do I gain if I rate others, in SO for example, user is encouraged to mark the accepted answer (even by a small rep gain **+2**)

  Proposed Solutions :

  - Have some powerups for users who rate others




----------
# Our implementation and plan :
  Mainly our work would be

### Key points we need to be in our system :

- Students should be encouraged to help each other
- Have incentive for asking and answering question here and not somewhere else
- Ranking system shouldn't be misused or abused
- We need to announce our **own** challenges and questions
- We need an engaging achievements and unlockables
- We need to separate the points from the cash/spendable points
- The system should be easily modifiable, in order to detect flaws and enhance the system

### Main inspirations and case studies :
- StackExchange (Specially SO) .
- Code Fights
- Quora
- Code Warrior
- Duilingo

### How we are going to achieve those goals ? :






#### Resources :

- [Building web reputation systems O'Reilly](https://books.google.com.eg/books?hl=en&lr=&id=MXJ5iB7BS_0C&oi=fnd&pg=PR2&dq=achievements+in+reputation+systems&ots=i7ktsa3A3M&sig=n7tGleIGBK_Fh4FL0dRA961u8ow&redir_esc=y#v=onepage&q=achievements%20in%20reputation%20systems&f=false)
