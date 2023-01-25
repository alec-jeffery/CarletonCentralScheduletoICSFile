from methods.getCourseInfo import getCourseInfo

dayOfWeekFromNumber = {
    0: "nani?",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
}

def main():
    courseList = []

    # monday is 1, tuesday is 2, so on...
    dayOfWeek = 0

    with open('Student Timetable.html', 'r') as file:
        for line in file:
            # timetable is split up in rows and columns. Each day in a week corresponds to a column in the row.
            #
            # - every row is preceded by "tr", so reset dayOfWeek there.
            # - every 4 rows there's a "th" that follows the tr, so make sure to reset dayOfWeek there as well.
            # - reset to 0, since we add one at the end of each loop
            
            # if index < 200:
            #     print(index)
            #     print(line)
            # print(line.__class__)

            if '<td' in line:
                dayOfWeek += 1
            else:
                dayOfWeek = 0

            # if '<th' or '<tr>' in line:
            #     print("in <th")
            #     print(line)
            #     dayOfWeek = 0
            
            if 'crn=' in line:
                # lineAndDayTuple = (line, dayOfWeek, dayOfWeekFromNumber[dayOfWeek])
                lineAndDayTuple = (line, dayOfWeek)
                courseList
                courseList.append(lineAndDayTuple)
                # print(lineAndDayTuple)

            # dayOfWeek += 1
    
    print(courseList)

    getCourseInfo(courseList)
if __name__ == "__main__":
    main()