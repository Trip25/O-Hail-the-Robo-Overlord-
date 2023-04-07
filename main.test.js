//👉 Write your tests below here:
import {expect, test} from '@jest/globals';
import { getRobotNames } from './main.js';


test("If Javascript is the only robot in the list, return an empty array", () => {
  const robots = ['JavaScript'];
  const actual = getRobotNames(robots);
  const expected = [];
  expect(actual).toStrictEqual(expected);
});

test("If Javascript is the only robot in the list-yet multiple entries, return an empty array", () => {
    const robots = ['JavaScript', 'JavaScript', 'JavaScript'];
    const actual = getRobotNames(robots);
    const expected = [];
    expect(actual).toStrictEqual(expected);
});

test("If other robots and Javascript are in the list, return the robots that are not called Javascript", () => {
  const robots = ['Ruby', 'JavaScript', 'WallE', 'C#'];
  const actual = getRobotNames(robots);
  const expected = ['Ruby', 'WallE', 'C#'];
  expect(actual).toStrictEqual(expected);
});

test('If there are no robots in the list, return an empty array', () => {
  const robots = [];
  const actual = getRobotNames(robots);
  const expected = [];
  expect(actual).toStrictEqual(expected);
});

