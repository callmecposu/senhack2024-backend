/*
      ENFJ, ENFP, ENTJ, ENTP, ESFJ, ESFP, ESTJ, ESTP, INFJ, INFP, INTJ, INTP, ISFJ, ISFP, ISTJ, ISTP
ENFJ "86%","91%","42%","73%","64%","80%","22%","41%","74%","73%","16%","35%","30%","40%","18%","9%"
ENFP "91%","97%","37%","85%","42%","93%","27%","76%","51%","73%","13%","36%","11%","49%","4%","14%"
ENTJ "42%","37%","91%","81%","53%","51%","87%","74%","25%","13%","46%","47%","29%","6%","66%","41%"
ENTP "73%","85%","81%","94%","32%","87%","70%","92%","11%","35%","22%","51%","5%","14%","11%","35%"
ESFJ "64%","42%","53%","32%","94%","40%","77%","37%","74%","17%","32%","5%","79%","57%","71%","19%"
ESFP "80%","93%","51%","87%","40%","70%","39%","75%","43%","58%","22%","39%","12%","58%","8%","26%"
ESTJ "22%","27%","87%","70%","77%","39%","96%","78%","14%","3%","33%","22%","48%","22%","79%","55%"
ESTP "41%","76%","74%","92%","37%","75%","78%","95%","5%","24%","17%","39%","12%","43%","20%","62%"
INFJ "74%","51%","25%","11%","74%","43%","14%","5%","95%","85%","65%","50%","85%","58%","53%","23%"
INFP "73%","73%","13%","35%","17%","58%","3%","24%","85%","97%","70%","84%","46%","78%","21%","49%"
INTJ "16%","13%","46%","22%","32%","22%","33%","17%","65%","70%","86%","89%","79%","45%","85%","78%"
INTP "35%","36%","47%","51%","5%","39%","22%","39%","50%","84%","89%","96%","38%","43%","51%","81%"
ISFJ "30%","11%","29%","5%","79%","12%","48%","12%","85%","46%","79%","38%","95%","76%","93%","62%"
ISFP "40%","49%","6%","14%","57%","58%","22%","43%","58%","78%","45%","43%","76%","97%","47%","76%"
ISTJ "18%","4%","66%","11%","71%","8%","79%","20%","53%","21%","85%","51%","93%","47%","96%","78%"
ISTP "9%","14%","41%","35%","19%","26%","55%","62%","23%","49%","78%","81%","62%","76%","78%","96%"

*/

const MBTICompatibility: any = {};

const convertPercentageToNumber = (percentage: string): number => {
    const number = parseFloat(percentage) / 100;
    return number;
};

MBTICompatibility.ENFJ = {
    ENFJ: convertPercentageToNumber("86%"),
    ENFP: convertPercentageToNumber("91%"),
    ENTJ: convertPercentageToNumber("42%"),
    ENTP: convertPercentageToNumber("73%"),
    ESFJ: convertPercentageToNumber("64%"),
    ESFP: convertPercentageToNumber("80%"),
    ESTJ: convertPercentageToNumber("22%"),
    ESTP: convertPercentageToNumber("41%"),
    INFJ: convertPercentageToNumber("74%"),
    INFP: convertPercentageToNumber("73%"),
    INTJ: convertPercentageToNumber("16%"),
    INTP: convertPercentageToNumber("35%"),
    ISFJ: convertPercentageToNumber("30%"),
    ISFP: convertPercentageToNumber("40%"),
    ISTJ: convertPercentageToNumber("18%"),
    ISTP: convertPercentageToNumber("9%"),
};

MBTICompatibility.ENFP = {
    ENFJ: convertPercentageToNumber("91%"),
    ENFP: convertPercentageToNumber("97%"),
    ENTJ: convertPercentageToNumber("37%"),
    ENTP: convertPercentageToNumber("85%"),
    ESFJ: convertPercentageToNumber("42%"),
    ESFP: convertPercentageToNumber("93%"),
    ESTJ: convertPercentageToNumber("27%"),
    ESTP: convertPercentageToNumber("76%"),
    INFJ: convertPercentageToNumber("51%"),
    INFP: convertPercentageToNumber("73%"),
    INTJ: convertPercentageToNumber("13%"),
    INTP: convertPercentageToNumber("36%"),
    ISFJ: convertPercentageToNumber("11%"),
    ISFP: convertPercentageToNumber("49%"),
    ISTJ: convertPercentageToNumber("4%"),
    ISTP: convertPercentageToNumber("14%"),
};

MBTICompatibility.ENTJ = {
    ENFJ: convertPercentageToNumber("42%"),
    ENFP: convertPercentageToNumber("37%"),
    ENTJ: convertPercentageToNumber("91%"),
    ENTP: convertPercentageToNumber("81%"),
    ESFJ: convertPercentageToNumber("53%"),
    ESFP: convertPercentageToNumber("51%"),
    ESTJ: convertPercentageToNumber("87%"),
    ESTP: convertPercentageToNumber("74%"),
    INFJ: convertPercentageToNumber("25%"),
    INFP: convertPercentageToNumber("13%"),
    INTJ: convertPercentageToNumber("46%"),
    INTP: convertPercentageToNumber("47%"),
    ISFJ: convertPercentageToNumber("29%"),
    ISFP: convertPercentageToNumber("6%"),
    ISTJ: convertPercentageToNumber("66%"),
    ISTP: convertPercentageToNumber("41%"),
};

MBTICompatibility.ENTP = {
    ENFJ: convertPercentageToNumber("73%"),
    ENFP: convertPercentageToNumber("85%"),
    ENTJ: convertPercentageToNumber("81%"),
    ENTP: convertPercentageToNumber("94%"),
    ESFJ: convertPercentageToNumber("32%"),
    ESFP: convertPercentageToNumber("87%"),
    ESTJ: convertPercentageToNumber("70%"),
    ESTP: convertPercentageToNumber("92%"),
    INFJ: convertPercentageToNumber("11%"),
    INFP: convertPercentageToNumber("35%"),
    INTJ: convertPercentageToNumber("22%"),
    INTP: convertPercentageToNumber("51%"),
    ISFJ: convertPercentageToNumber("5%"),
    ISFP: convertPercentageToNumber("14%"),
    ISTJ: convertPercentageToNumber("11%"),
    ISTP: convertPercentageToNumber("35%"),
};

MBTICompatibility.ESFJ = {
    ENFJ: convertPercentageToNumber("64%"),
    ENFP: convertPercentageToNumber("42%"),
    ENTJ: convertPercentageToNumber("53%"),
    ENTP: convertPercentageToNumber("32%"),
    ESFJ: convertPercentageToNumber("94%"),
    ESFP: convertPercentageToNumber("40%"),
    ESTJ: convertPercentageToNumber("77%"),
    ESTP: convertPercentageToNumber("37%"),
    INFJ: convertPercentageToNumber("74%"),
    INFP: convertPercentageToNumber("17%"),
    INTJ: convertPercentageToNumber("32%"),
    INTP: convertPercentageToNumber("5%"),
    ISFJ: convertPercentageToNumber("79%"),
    ISFP: convertPercentageToNumber("57%"),
    ISTJ: convertPercentageToNumber("71%"),
    ISTP: convertPercentageToNumber("19%"),
};

MBTICompatibility.ESFP = {
    ENFJ: convertPercentageToNumber("80%"),
    ENFP: convertPercentageToNumber("93%"),
    ENTJ: convertPercentageToNumber("51%"),
    ENTP: convertPercentageToNumber("87%"),
    ESFJ: convertPercentageToNumber("40%"),
    ESFP: convertPercentageToNumber("70%"),
    ESTJ: convertPercentageToNumber("39%"),
    ESTP: convertPercentageToNumber("75%"),
    INFJ: convertPercentageToNumber("43%"),
    INFP: convertPercentageToNumber("58%"),
    INTJ: convertPercentageToNumber("22%"),
    INTP: convertPercentageToNumber("39%"),
    ISFJ: convertPercentageToNumber("12%"),
    ISFP: convertPercentageToNumber("58%"),
    ISTJ: convertPercentageToNumber("8%"),
    ISTP: convertPercentageToNumber("26%"),
};

MBTICompatibility.ESTJ = {
    ENFJ: convertPercentageToNumber("22%"),
    ENFP: convertPercentageToNumber("27%"),
    ENTJ: convertPercentageToNumber("87%"),
    ENTP: convertPercentageToNumber("70%"),
    ESFJ: convertPercentageToNumber("77%"),
    ESFP: convertPercentageToNumber("39%"),
    ESTJ: convertPercentageToNumber("96%"),
    ESTP: convertPercentageToNumber("78%"),
    INFJ: convertPercentageToNumber("14%"),
    INFP: convertPercentageToNumber("3%"),
    INTJ: convertPercentageToNumber("33%"),
    INTP: convertPercentageToNumber("22%"),
    ISFJ: convertPercentageToNumber("48%"),
    ISFP: convertPercentageToNumber("22%"),
    ISTJ: convertPercentageToNumber("79%"),
    ISTP: convertPercentageToNumber("55%"),
};

MBTICompatibility.ESTP = {
    ENFJ: convertPercentageToNumber("41%"),
    ENFP: convertPercentageToNumber("76%"),
    ENTJ: convertPercentageToNumber("74%"),
    ENTP: convertPercentageToNumber("92%"),
    ESFJ: convertPercentageToNumber("37%"),
    ESFP: convertPercentageToNumber("75%"),
    ESTJ: convertPercentageToNumber("78%"),
    ESTP: convertPercentageToNumber("95%"),
    INFJ: convertPercentageToNumber("5%"),
    INFP: convertPercentageToNumber("24%"),
    INTJ: convertPercentageToNumber("17%"),
    INTP: convertPercentageToNumber("39%"),
    ISFJ: convertPercentageToNumber("12%"),
    ISFP: convertPercentageToNumber("43%"),
    ISTJ: convertPercentageToNumber("20%"),
    ISTP: convertPercentageToNumber("62%"),
};

MBTICompatibility.INFJ = {
    ENFJ: convertPercentageToNumber("74%"),
    ENFP: convertPercentageToNumber("51%"),
    ENTJ: convertPercentageToNumber("25%"),
    ENTP: convertPercentageToNumber("11%"),
    ESFJ: convertPercentageToNumber("74%"),
    ESFP: convertPercentageToNumber("43%"),
    ESTJ: convertPercentageToNumber("14%"),
    ESTP: convertPercentageToNumber("5%"),
    INFJ: convertPercentageToNumber("95%"),
    INFP: convertPercentageToNumber("85%"),
    INTJ: convertPercentageToNumber("65%"),
    INTP: convertPercentageToNumber("50%"),
    ISFJ: convertPercentageToNumber("85%"),
    ISFP: convertPercentageToNumber("58%"),
    ISTJ: convertPercentageToNumber("53%"),
    ISTP: convertPercentageToNumber("23%"),
};

MBTICompatibility.INFP = {
    ENFJ: convertPercentageToNumber("73%"),
    ENFP: convertPercentageToNumber("73%"),
    ENTJ: convertPercentageToNumber("13%"),
    ENTP: convertPercentageToNumber("35%"),
    ESFJ: convertPercentageToNumber("17%"),
    ESFP: convertPercentageToNumber("58%"),
    ESTJ: convertPercentageToNumber("3%"),
    ESTP: convertPercentageToNumber("24%"),
    INFJ: convertPercentageToNumber("85%"),
    INFP: convertPercentageToNumber("97%"),
    INTJ: convertPercentageToNumber("70%"),
    INTP: convertPercentageToNumber("84%"),
    ISFJ: convertPercentageToNumber("46%"),
    ISFP: convertPercentageToNumber("78%"),
    ISTJ: convertPercentageToNumber("21%"),
    ISTP: convertPercentageToNumber("49%"),
};

MBTICompatibility.INTJ = {
    ENFJ: convertPercentageToNumber("16%"),
    ENFP: convertPercentageToNumber("13%"),
    ENTJ: convertPercentageToNumber("46%"),
    ENTP: convertPercentageToNumber("22%"),
    ESFJ: convertPercentageToNumber("32%"),
    ESFP: convertPercentageToNumber("22%"),
    ESTJ: convertPercentageToNumber("33%"),
    ESTP: convertPercentageToNumber("17%"),
    INFJ: convertPercentageToNumber("65%"),
    INFP: convertPercentageToNumber("70%"),
    INTJ: convertPercentageToNumber("86%"),
    INTP: convertPercentageToNumber("89%"),
    ISFJ: convertPercentageToNumber("79%"),
    ISFP: convertPercentageToNumber("45%"),
    ISTJ: convertPercentageToNumber("85%"),
    ISTP: convertPercentageToNumber("78%"),
};

MBTICompatibility.INTP = {
    ENFJ: convertPercentageToNumber("35%"),
    ENFP: convertPercentageToNumber("36%"),
    ENTJ: convertPercentageToNumber("47%"),
    ENTP: convertPercentageToNumber("51%"),
    ESFJ: convertPercentageToNumber("5%"),
    ESFP: convertPercentageToNumber("39%"),
    ESTJ: convertPercentageToNumber("22%"),
    ESTP: convertPercentageToNumber("39%"),
    INFJ: convertPercentageToNumber("50%"),
    INFP: convertPercentageToNumber("84%"),
    INTJ: convertPercentageToNumber("89%"),
    INTP: convertPercentageToNumber("96%"),
    ISFJ: convertPercentageToNumber("38%"),
    ISFP: convertPercentageToNumber("43%"),
    ISTJ: convertPercentageToNumber("51%"),
    ISTP: convertPercentageToNumber("81%"),
};

MBTICompatibility.ISFJ = {
    ENFJ: convertPercentageToNumber("30%"),
    ENFP: convertPercentageToNumber("11%"),
    ENTJ: convertPercentageToNumber("29%"),
    ENTP: convertPercentageToNumber("5%"),
    ESFJ: convertPercentageToNumber("79%"),
    ESFP: convertPercentageToNumber("12%"),
    ESTJ: convertPercentageToNumber("48%"),
    ESTP: convertPercentageToNumber("12%"),
    INFJ: convertPercentageToNumber("85%"),
    INFP: convertPercentageToNumber("46%"),
    INTJ: convertPercentageToNumber("79%"),
    INTP: convertPercentageToNumber("38%"),
    ISFJ: convertPercentageToNumber("95%"),
    ISFP: convertPercentageToNumber("76%"),
    ISTJ: convertPercentageToNumber("93%"),
    ISTP: convertPercentageToNumber("62%"),
};

MBTICompatibility.ISFP = {
    ENFJ: convertPercentageToNumber("40%"),
    ENFP: convertPercentageToNumber("49%"),
    ENTJ: convertPercentageToNumber("6%"),
    ENTP: convertPercentageToNumber("14%"),
    ESFJ: convertPercentageToNumber("57%"),
    ESFP: convertPercentageToNumber("58%"),
    ESTJ: convertPercentageToNumber("22%"),
    ESTP: convertPercentageToNumber("43%"),
    INFJ: convertPercentageToNumber("58%"),
    INFP: convertPercentageToNumber("78%"),
    INTJ: convertPercentageToNumber("45%"),
    INTP: convertPercentageToNumber("43%"),
    ISFJ: convertPercentageToNumber("76%"),
    ISFP: convertPercentageToNumber("97%"),
    ISTJ: convertPercentageToNumber("47%"),
    ISTP: convertPercentageToNumber("76%"),
};

MBTICompatibility.ISTJ = {
    ENFJ: convertPercentageToNumber("18%"),
    ENFP: convertPercentageToNumber("4%"),
    ENTJ: convertPercentageToNumber("66%"),
    ENTP: convertPercentageToNumber("11%"),
    ESFJ: convertPercentageToNumber("71%"),
    ESFP: convertPercentageToNumber("8%"),
    ESTJ: convertPercentageToNumber("79%"),
    ESTP: convertPercentageToNumber("20%"),
    INFJ: convertPercentageToNumber("53%"),
    INFP: convertPercentageToNumber("21%"),
    INTJ: convertPercentageToNumber("85%"),
    INTP: convertPercentageToNumber("51%"),
    ISFJ: convertPercentageToNumber("93%"),
    ISFP: convertPercentageToNumber("47%"),
    ISTJ: convertPercentageToNumber("96%"),
    ISTP: convertPercentageToNumber("78%"),
};

MBTICompatibility.ISTP = {
    ENFJ: convertPercentageToNumber("9%"),
    ENFP: convertPercentageToNumber("14%"),
    ENTJ: convertPercentageToNumber("41%"),
    ENTP: convertPercentageToNumber("35%"),
    ESFJ: convertPercentageToNumber("19%"),
    ESFP: convertPercentageToNumber("26%"),
    ESTJ: convertPercentageToNumber("55%"),
    ESTP: convertPercentageToNumber("62%"),
    INFJ: convertPercentageToNumber("23%"),
    INFP: convertPercentageToNumber("49%"),
    INTJ: convertPercentageToNumber("78%"),
    INTP: convertPercentageToNumber("81%"),
    ISFJ: convertPercentageToNumber("62%"),
    ISFP: convertPercentageToNumber("76%"),
    ISTJ: convertPercentageToNumber("78%"),
    ISTP: convertPercentageToNumber("96%"),
};

const PersonalityType: any = {
    0: "UNKNOWN_MBTI",
    1: "ISTJ",
    2: "ISFJ",
    3: "INFJ",
    4: "INTJ",
    5: "ISTP",
    6: "ISFP",
    7: "INFP",
    8: "INTP",
    9: "ESTP",
    10: "ESFP",
    11: "ENFP",
    12: "ENTP",
    13: "ESTJ",
    14: "ESFJ",
    15: "ENFJ",
    16: "ENTJ"
};

export { MBTICompatibility, PersonalityType };
