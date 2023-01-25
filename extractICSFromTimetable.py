from methods.getCourseInfo import getCourseInfo


dayOfWeekFromNumber = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
}

columnNumberFromDay = {
    "monday": 1,
    "tuesday": 1,
    "wednesday": 1,
    "thursday": 1,
    "friday": 1,
}

def main():
    courseList = []

    # monday is 1, tuesday is 2, so on...
    dayOfWeek = 0

    with open('Student Timetable.html', 'r') as file:
        for line in file:
            # timetable is split up in rows and columns. Each day in a week corresponds to a column in the row.
            # count up '<td' as each one pseudo-corresponds to a day
            # need separate check for what day it is, as course in column '1: "monday" ' will 
            # overlap the next column below, thus only showing 4 '<td' instead of 5

            
            if 'crn=' in line:
                dayOfWeek += 1
                
                # lineAndDayTuple = (line, dayOfWeek, dayOfWeekFromNumber[dayOfWeek])
                lineAndDayTuple = (line, dayOfWeek)
                courseList.append(lineAndDayTuple)
                # print(lineAndDayTuple)
                
                currentDay = dayOfWeekFromNumber[dayOfWeek]
                columnNumberFromDay[currentDay] += 1

            elif '<td' in line:
                dayOfWeek += 1
            
            else:
                dayOfWeek = 0

    
    print(courseList)

    getCourseInfo(courseList)
if __name__ == "__main__":
    main()