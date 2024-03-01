import { greetings } from "./utils";

describe("greetings", () => {
  it("should return morning when the time is 5:00", () => {
    expect(greetings(5)).toBe("Доброе утро!");
  });

  it("should return morning when the time is 11:00", () => {
    expect(greetings(11)).toBe("Доброе утро!");
  });

  it("should return morning when the time is 12:00", () => {
    expect(greetings(12)).toBe("Добрый день!");
  });

  it("should return morning when the time is 17:00", () => {
    expect(greetings(17)).toBe("Добрый день!");
  });

  it("should return morning when the time is 18:00", () => {
    expect(greetings(18)).toBe("Добрый вечер!");
  });

  it("should return midnight when the time is 22:00", () => {
    expect(greetings(22)).toBe("Доброй ночи!");
  });

  it("should return midnight when the time is 23:00", () => {
    expect(greetings(23)).toBe("Доброй ночи!");
  });

  it("should return midnight when the time is 00:00", () => {
    expect(greetings(0)).toBe("Доброй ночи!");
  });

  it("should return midnight when the time is 4:00", () => {
    expect(greetings(4)).toBe("Доброй ночи!");
  });

  it("should fire exception when the time is -1", () => {
    expect(() => greetings(2)).toThrow("Неверное количество часов");
  })
});
