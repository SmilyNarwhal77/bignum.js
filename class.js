class BigNum {
  constructor(deg=0, mag=0) {
    this.deg = deg;
    this.mag = mag;
    return [this.deg, this.mag];
  }
  gte(dega, maga) {
    if(this.mag > maga) {
      return true;
    } else if(this.mag == maga) {
      if(this.deg >= dega) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  gt(dega, maga) {
    if(this.mag > maga) {
      return true;
    } else if(this.mag == maga) {
      if(this.deg > dega) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  lte(dega, maga) {
    if(this.mag < maga) {
      return true;
    } else if(this.mag == maga) {
      if(this.deg <= dega) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  lt(dega, maga) {
    if(this.mag < maga) {
      return true;
    } else if(this.mag == maga) {
      if(this.deg < dega) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  ensure() {
    if(this.deg < 10 && this.deg >= 1) return;
    if(this.deg >= 10) {
      for(let i = 0; i < Math.floor(Math.log10(this.deg)); i++) {
        
