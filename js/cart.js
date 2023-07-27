


// Get Data All
const get_data = () => {
    check_data();
    let data = JSON.parse(localStorage.getItem('carts'));
    return data;
}

// Get Count
const get_count = () => {
    check_data();
    let data = JSON.parse(localStorage.getItem('carts'));
    return data.length;
}

// Check Data in LocalStorage
const check_data = () => {
    if (localStorage.getItem('carts') === null || localStorage.getItem('carts') === '') {
        localStorage.setItem('carts', '[]');
    }
}


// Add Data in Array to LocalStorage
const add = (id,name, qty, price, discount) => {
    if (confirm('คุณต้องการที่จะเพิ่มสินค้าชิ้นนี้ลงตระกร้า ใช่ หรือ ไม่?')) {
        check_data();
        let data = JSON.parse(localStorage.getItem('carts'));
        if (data.find(res => res.name === name) !== undefined) {
            data[data.map(e => e.name).indexOf(name)].qty += qty;
            alert('เพิ่มจำนวนสินค้าเสร็จสิ้น');
        } else {
            data.push({id,name, qty, price, discount});
            alert('เพิ่มสินค้าเสร็จสิ้น');
        }
        localStorage.setItem('carts',JSON.stringify(data));
    }
}

// Remove Data in Array to LocalStorage
const remove = (name) => {
    if (confirm('คุณต้องการที่ลบสินค้าออกจากรายการ ใช่ หรือ ไม่?')) {
        check_data();
        let data = JSON.parse(localStorage.getItem('carts'));
        if (data.find(res => res.name === name) !== undefined) {
            data.splice(data[data.map(e => e.name).indexOf(name)], 1);
            localStorage.setItem('carts',JSON.stringify(data));
            alert('ลบสินค้าเสร็จสิ้น');
            location.reload();
        } else {
            alert('ไม่พบสินค้า');
        }
    }
}