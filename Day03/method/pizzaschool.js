// 피자 가게 운영
// **속성
// sales: 총 매출(초기값: 0)
// menus: 메뉴 배열(피자이름, 가격, 재고)
// ** 매서드
// 1. order(menuNumber)
// 재고 1이상, 매출+, 재고-, ㅁㅁ피자 판매완료. 현재 매출 ㅁㅁ원
// 재고 0, ㅁㅁ피자 품절
// 2. restock(menuNumber)
// 해당 메뉴 재고 +1, ㅁㅁ피자 재고가 충당되었습니다. 현재 재고 ㅁ개
// 3. add(name, price, stock)
// 메뉴 배열에 데이터 추가
// 단, name 빈 문자 or price가 음수 or stock 음수일 시, 올바르지 않은 데이터

const pizzaSchool = {
  sales: 0,
  menus: [
    { name: "불고기", price: 7000, stock: 3 },
    { name: "페퍼로니", price: 8000, stock: 1 },
    { name: "콤비네이션", price: 7500, stock: 2 },
    { name: "하와이안", price: 7800, stock: 0 },
  ],
  order: function (menuNumber) {
    if (this.menus[menuNumber - 1].stock > 0) {
      this.sales += this.menus[menuNumber - 1].price;
      this.menus[menuNumber - 1].stock -= 1;
      console.log(
        `${this.menus[menuNumber - 1].name} 피자 판매 완료. 현재 매출: ${
          this.sales
        }원 입니다.`
      );
    } else {
      console.log(`${this.menus[menuNumber - 1].name} 피자는 품절입니다.`);
    }
  },
  restock: function (menuNumber) {
    this.menus[menuNumber - 1].stock++;
    console.log(
      `${
        this.menus[menuNumber - 1].name
      } 피자 재고가 충당되었습니다. 현재 재고: ${
        this.menus[menuNumber - 1].stock
      }개`
    );
  },
  add: function (name, price, stock) {
    const nameCheck = typeof name != "string" || name == "";
    const priceCheck = typeof price != "number" || price < 0;
    const stockCheck = typeof stock != "number" || stock < 0;
    if (nameCheck || priceCheck || stockCheck) {
      console.log("올바르지 않은 데이터 입니다.");
    } else {
      this.menus.push({ name: name, price: price, stock: stock });
    }
  },
};

pizzaSchool.restock(1);
pizzaSchool.order(1);
pizzaSchool.order(1);
pizzaSchool.order(1);
pizzaSchool.order(1);
pizzaSchool.order(1);
pizzaSchool.add("블랙타이거 쉬림프", 10000, 1);
pizzaSchool.order(5);
pizzaSchool.order(5);
pizzaSchool.restock(5);
