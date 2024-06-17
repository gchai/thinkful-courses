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
    getStartHours() {
        return Number(this.startTime.split(":")[0]);
    }
    getStartMinutes() {
        return Number(this.startTime.split(":")[1]);
    }
    getEndHours() {
        return Number(this.endTime.split(":")[0]);
    }
    getEndMinutes() {
        return Number(this.endTime.split(":")[1]);
    }
    durationMinutes() {
        const durationHours = this.getEndHours() - this.getStartHours();
        const durationMinutes = this.getEndMinutes() - this.getStartMinutes();
        return durationHours * 60 + durationMinutes;
    }
    conflict(other) {
        return !this.isBefore(other) && !other.isBefore(this);
    }
    isBefore(other) {
        return (
            this.getEndHours() < other.getStartHours() ||
            (this.getEndHours() === other.getStartHours() &&
                this.getEndMinutes() <= other.getStartMinutes())
        );
    }
}

module.exports = Event;