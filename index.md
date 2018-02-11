# cheder-cal

[Fourmilab public domain calendar tools](fourmilab)


## Plans
We will be: 
 - learning about the Hebrew calendar,
 - learning about programming and software development
 - writing software to convert between Hebrew and Gregorian
 - making the project meaningful for each of us in some way
 - documenting and sharing our progress
 - maybe submitting papers or posters to academic venues (Jewish education perhaps?) or science fairs
 

### Resources
[Hebrew Calendar Quick Reference](files/quickref.pdf)

[Calendar Texts](files/calendarTexts.pdf)

### Class notes

#### Week 1, 17 Sep 2017, Intro
 - Introductions (until repo is private, participants are: SSG, MFB, DF, JM, LS, SMG)
 - How can we make this meaningful to ourselves?
   - learn programming and software development
   - learn about Judaism and calendars
   - teacher younger kids about Hebrew calendar
   - integrate somehow with Bar Mitzvah drash and project
   - interesting science questions about calendars and annual cycles

#### Week 2, 24 Sep 2017, Tools and Goals
 
##### Agenda
   It's hard to set goals without some idea of:
     - Why you're doing what you're doing, and
     - What resources you have to do it with
     
   We tried to address the *why* last week. We may have to leave that unresolved for now.
   This week we'll think about the tools we could use and what we could do with them.
   We'll try to select tools (languages, etc.) this week, try to set some basic goals,
   and, if we have time, start figuring out how we will help everyone begin doing 
   actual work.
##### Tool choices
   - Python
     - Pros:
       - Language taught in schools, will be relevant
       - Good, well-structured language
       - Don't have to learn a lot of other stuff to use it
     - Cons:
       - Can only make command-line programs (unless wanting to learn a lot of other stuff)
       - Not usable with PencilCode (if that matters)
   - JavaScript
     - Pros:
       - Can use simply for command line like Python
       - Is most widely used language in world
       - Can also make user interfaces and write programs with immediate browser feedback
         (Then have to also learn something about HTML, CSS, (React?), etc.)
     - Cons:
       - Messier than python

##### Notes (MFB during class)

    - Five people
    - A few online resources
    - Five computers
    - GitHub account
    - Knowledge of language, calendars, and programming

##### Minutes
 - Tool choices: Python (unless SSG's need to check syntax all the time gets annoying) -- all, especially JM
 - Goals: Just build the converter. nothing else for now (MG)
 - We went on a lot of tangents, but only to fill in knowledge about technology. Some questions we answered:
    - What's a command line, what's a graphical user interface (GUI)?
    - What is the Internet? (we were going to talk more about how it works but didn't get a chance)
    - Why are some browsers better than others -- like Chrome is good, IE is bad? (JM) (SSG's answer: because 
      IE sucks -- at least it used to, a lot) (the other questions got better answers)
    - What's a directory? What's a file?
    - How do you "save work" when you're working on a command line? (MFB)
    - We will use https://www.pythonanywhere.com as our Python environment/IDE for now
  

#### Week 3, 15 Oct 2017, Environment
##### Agenda
  - Does everyone have a computer?
  - Connect to internet
  - Make ourselves accounts with pythonanywhere
  - Try out tutorials
##### Didn't get very far


#### Week 5, 29 Oct 2017, Environment 
##### Agenda — Try this again
  - Does everyone have a computer?
  - Connect to internet
  - Make ourselves accounts with pythonanywhere
  - Try out tutorials
    - https://help.pythonanywhere.com/pages/
##### Minutes
  - JM, LS had computers. JM needs to bring their own next time
  - SSG tried to fix SMG's old linux laptop, to no avail. Will get a chromebook for next time.
  - Everyone got accounts on puythonanywhere
  - Started working on ideas for algorithm for Hebrew calendar:
    - Taking day 1 to be Rosh Hashanah, Year 1, how do we calculate Hebrew year, month, date, and day of week
      for any day n?
      - JM suggests a while loop, adding 354 days for regular years and 384 days for leap years until passing
        n days to determine year...
      - SSG suggests calculating fixed standard period (constant x days for every pair of 19-year cycles?), 
        divide n by x to get year...
      - SSG didn't get a chance to read DS's materials on Hebrew calendar calculations until after class. More
        complications that we hadn't accounted for. SSG started thinking algorithm definition impractical. Searched
        for database of dates or something. Stumbled upon: http://www.fourmilab.ch/documents/calendar/ from 
        http://www.fourmilab.ch/. Calculations for seemingly every calendar in the world!
      - So what should we do?
  - <strong><font color="red">No class next week!</font></strong>
  
##### Homework
  - Everyone: follow pythonanytwhere tutorials.
  - JM: compare pythonanywhere to other python web platform, let SSG know which seems better
  - Had told LS to work on algorithm, but SSG needs to think more on it first
  
  
#### Formulas

##### Year Calcualtions

  ##### Rosh Hashanah Day Calulations
  
  
