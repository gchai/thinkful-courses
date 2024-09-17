const { expect } = require("chai");
const Event = require("../src/event");

describe("Event class", () => {
  describe("durationMinutes getter", () => {
    it("duration of lunchEvent", () => {
      lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
      expect(lunchEvent.durationMinutes).to.equal(60);
    });
    it("duration of meeting", () => {
      meeting = new Event("Meeting", "14:00", "15:30", "Conference room");
      expect(meeting.durationMinutes).to.equal(90);
    });
  });
  describe("startHours setter", () => {
    it("change lunchEvent start hours", () => {
      lunchEvent = new Event("Lunch", "12:30", "15:30", "Chipotle");
      lunchEvent.startHours = 14;
      expect(lunchEvent.startTime).to.equal("14:30");
      expect(lunchEvent.endTime).to.equal("15:30");
      expect(lunchEvent.durationMinutes).to.equal(60);
    });
  });
});
