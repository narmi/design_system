import formatFileSize from "./formatFileSize";

describe("formatFileSize", () => {
  it("formats bytes without a unit prefix", () => {
    expect(formatFileSize(512)).toEqual("512B");
  });

  it("formats kilobytes without decimals", () => {
    expect(formatFileSize(5120)).toEqual("5KB");
  });

  it("rounds to the nearest whole kilobyte", () => {
    expect(formatFileSize(1536)).toEqual("2KB");
    expect(formatFileSize(1400)).toEqual("1KB");
  });

  it("keeps one decimal at megabytes and above", () => {
    expect(formatFileSize(1500000)).toEqual("1.4MB");
    expect(formatFileSize(2_500_000_000)).toEqual("2.3GB");
  });

  it("drops a trailing zero decimal", () => {
    expect(formatFileSize(2 * 1024 * 1024)).toEqual("2MB");
  });

  it("switches units at the 1024 boundary", () => {
    expect(formatFileSize(1023)).toEqual("1023B");
    expect(formatFileSize(1024)).toEqual("1KB");
  });

  it("switches units when rounding carries the value to the next unit", () => {
    // One byte under a megabyte rounds to 1024KB, which should read as 1MB
    // rather than naming a unit count the unit itself replaces.
    expect(formatFileSize(1024 * 1024 - 1)).toEqual("1MB");
    expect(formatFileSize(1024 * 1024 * 1024 - 1)).toEqual("1GB");
  });

  it("clamps sizes beyond the largest known unit", () => {
    // Petabyte-scale input keeps formatting in gigabytes rather than running
    // off the end of the unit list. The result is deliberately absurd: a file
    // size this large is a bug upstream, and it should look like one.
    expect(formatFileSize(Math.pow(1024, 6))).toEqual("1073741824GB");
  });

  it("returns a zero size for zero, negative and non-finite input", () => {
    expect(formatFileSize(0)).toEqual("0B");
    expect(formatFileSize(-1)).toEqual("0B");
    expect(formatFileSize(NaN)).toEqual("0B");
    expect(formatFileSize(Infinity)).toEqual("0B");
  });
});
