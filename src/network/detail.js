import { request } from "../network/request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params: {
      iid
    }
  });
}
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.desc = itemInfo.title;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.goodscount = shopInfo.cGoods;
    this.scores = shopInfo.score;
  }
}
export function getRecommend() {
  return request({
    url:'/recommend'
  });
}