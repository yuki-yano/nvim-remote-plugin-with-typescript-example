import { sum } from "./sum"

describe("sum()", () => {
  it("sum([1, 2]) == 3", () => {
    expect(sum([1, 2])).toBe(3)
  })
})
