class Event {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
  get startHours() {
    return Number(this.startTime.split(":")[0]);
  }
  get startMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  get endHours() {
    return Number(this.endTime.split(":")[0]);
  }
  get endMinutes() {
    return Number(this.endTime.split(":")[1]);
  }

  get durationMinutes() {
    const durationHours = this.endHours - this.startHours;
    const durationMinutes = this.endMinutes - this.startMinutes;
    return (durationHours * 60) + durationMinutes
  }

  set startHours(startHour){
    this.startTime = `${startHour}:${this.startMinutes}`;
  }
}

module.exports = Event;
