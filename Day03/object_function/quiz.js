// 1. object venti, sales:0,
// menus: 1.아아 2000, 2.라떼 3000, 3.에이드 3800
// sell:function(menus_num)
//
const venti = {
  sales: 0,
  menus: [
    { menu: "아아", price: 2000 },
    { menu: "라떼", price: 3000 },
    { menu: "에이드", price: 3800 },
  ],

  sell: function (num) {
    console.log(
      `${this.menus[num - 1].menu}가 ${
        this.menus[num - 1].price
      }원 판매되었습니다.`
    );
    this.sales += this.menus[num - 1].price;
    console.log(`현재 매출은 ${this.sales}원 입니다.`);
  },
};

/*
venti.sell(1);
venti.sell(2);
venti.sell(3);
venti.sell(1);
*/

// 서브웨이, 매출 0,
// 메뉴는 이름:클럽,가격:7000,재고:3 // BLT,7500,2 // 에그마요,5000,2 // 쉬림프,8000,0
// 판매(함수):매출+, 재고-, 판매내용출력 && 재고없으면 품절
// 재고추가(함수): 재고 추가
const subway = {
  sales: 0,
  menus: [
    { name: "서브웨이클럽", price: 7000, stock: 3 },
    { name: "BLT", price: 7500, stock: 2 },
    { name: "에그마요", price: 5000, stock: 2 },
    { name: "쉬림프", price: 8000, stock: 0 },
  ],
  sell: function (num) {
    if (this.menus[num - 1].stock > 0) {
      this.sales += this.menus[num - 1].price;
      this.menus[num - 1].stock -= 1;
      console.log(`${this.menus[num - 1].name} 이(가) 판매되었습니다.`);
      console.log(
        `${this.menus[num - 1].name} 의 재고는 ${
          this.menus[num - 1].stock
        }개 입니다.`
      );
      console.log(`총 판매 금액은 ${this.sales} 입니다`);
    } else {
      console.log(`${this.menus[num - 1].name} 은(는) 품절입니다.`);
    }
  },

  add: function (num) {
    this.menus[num - 1].stock += 1;
    console.log(`${this.menus[num - 1].name}의 재고가 추가되었습니다.`);
    console.log(
      `${this.menus[num - 1].name} 의 재고는 ${
        this.menus[num - 1].stock
      }개 입니다.`
    );
  },
};

subway.sell(2);
subway.sell(3);
subway.sell(3);
subway.sell(3);
subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.add(1);
subway.add(4);
