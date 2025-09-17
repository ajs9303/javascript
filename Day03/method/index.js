const coffee = "americano";

coffee[0]; // "a"
coffee.length; // 길이 확인, return: 9

coffee.includes("i"); // 포함 여부, return: true
coffee.startsWith("m"); // 시작 여부, return: false
coffee.endsWith("o"); // 끝 여부, return: true
coffee.indexOf("r"); // 몇번째 위치에 있는지, return: 3

coffee.slice(0, 5); // 시작부터 끝까지 자르기(0~5-1), return: "amer"
coffee.replace("a", "k"); // (앞에 있는 1개) a를 k로 바꿈, return: "kmericano"
coffee.replaceAll("a", "k"); // 모든 a를 k로 바꿈, return: "kmerickno"
coffee.split("i"); // i 기준으로 분리, return: ["amer", "cano"]
" x ".trim(); // 공백 제거, return: "x"
coffee.repeat(5); // 반복, return: "americanoamericanoamericanoamericanoamericano"
coffee.toUpperCase(); // 대문자화, return: "AMERICANO"
coffee.toLowerCase(); // 소문자화, return: "americano"
