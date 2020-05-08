/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function(params) {

let employee = {
  firstName: params[0],
  familyName: params[1],
  title: params[2],
  payPerHour: params[3],
  timeInEvents: [],
  timeOutEvents: []
}

return employee

};

const createEmployeeRecords = function(paramsArr) {

  return paramsArr.map(createEmployeeRecord)
}

const createTimeInEvent = function(date) {
  let [dateStr, hour] = date.split(" ")
  hour = parseInt(hour)
  this.timeInEvents.push({type: "TimeIn", hour: hour, date: dateStr})
  return this
}

const createTimeOutEvent = function(date) {
  let [dateStr, hour] = date.split(" ")
  hour = parseInt(hour)
  this.timeOutEvents.push({type: "TimeOut", hour: hour, date: dateStr})
  return this
}

const hoursWorkedOnDate = function(date) {
  let timeIn = this.timeInEvents.find((event)=> event.date == date)
  let timeOut = this.timeOutEvents.find((event)=> event.date == date)
  return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const calculatePayroll = function(employeeArr) {
  return employeeArr.reduce((sum, employee) => {
    //
    // console.log(allWagesFor.call(employee))
    console.log(sum)
    return allWagesFor.call(employee) + sum }, 0)
}

const findEmployeeByFirstName = function(srcArray,firstName) {
  return srcArray.find((record)=> record.firstName == firstName)
}
