import colors from './colors';

test("primaryOrange color should be right color",()=>{
    expect(colors.primaryOrange).toBe("rgb(242,105,38)");
});
test("primaryGray color should be right color",()=>{
    expect(colors.primaryGray).toBe("rgb(72,76,86)");
});
test("primaryWhite color should be right color",()=>{
    expect(colors.primaryWhite).toBe("rgb(255,255,255)");
});
test("secondaryBlue color should be right color",()=>{
    expect(colors.secondaryBlue).toBe("rgb(115,165,194)");
});
test("secondaryYellow color should be right color",()=>{
    expect(colors.secondaryYellow).toBe("rgb(253,181,21)");
});
test("secondaryGray color should be right color",()=>{
    expect(colors.secondaryGray).toBe("rgb(185,185,186)");
});