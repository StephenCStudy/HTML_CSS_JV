let number = Number(prompt("nhap mot so trong khoang tu 0 den 999: "));

if (number < 0 || number > 999 || isNaN(number)) {
    console.log('Vui lòng nhập số trong khoảng từ 0 đến 999.');
} else {
    if (number === 0) {
        console.log('Không');
    } else {
        let words = '';

        // Xử lý phần trăm
        if (number >= 100) {
            switch (Math.floor(number / 100)) {
                case 1: words += "Một trăm "; break;
                case 2: words += "Hai trăm "; break;
                case 3: words += "Ba trăm "; break;
                case 4: words += "Bốn trăm "; break;
                case 5: words += "Năm trăm "; break;
                case 6: words += "Sáu trăm "; break;
                case 7: words += "Bảy trăm "; break;
                case 8: words += "Tám trăm "; break;
                case 9: words += "Chín trăm "; break;
            }
            number %= 100; 
        }

        // Xử lý phần mười
        if (number >= 10) {
            if (number < 20) {
                switch (number) {
                    case 10: words += "Mười"; break;
                    case 11: words += "Mười một"; break;
                    case 12: words += "Mười hai"; break;
                    case 13: words += "Mười ba"; break;
                    case 14: words += "Mười bốn"; break;
                    case 15: words += "Mười lăm"; break;
                    case 16: words += "Mười sáu"; break;
                    case 17: words += "Mười bảy"; break;
                    case 18: words += "Mười tám"; break;
                    case 19: words += "Mười chín"; break;
                }
            } else {
                switch (Math.floor(number / 10)) {
                    case 2: words += "Hai mươi "; break;
                    case 3: words += "Ba mươi "; break;
                    case 4: words += "Bốn mươi "; break;
                    case 5: words += "Năm mươi "; break;
                    case 6: words += "Sáu mươi "; break;
                    case 7: words += "Bảy mươi "; break;
                    case 8: words += "Tám mươi "; break;
                    case 9: words += "Chín mươi "; break;
                }
                number %= 10; 
            }
        }

        // Xử lý phần đơn vị
        if (number > 0) {
            switch (number) {
                case 1: words += "Một"; break;
                case 2: words += "Hai"; break;
                case 3: words += "Ba"; break;
                case 4: words += "Bốn"; break;
                case 5: words += "Năm"; break;
                case 6: words += "Sáu"; break;
                case 7: words += "Bảy"; break;
                case 8: words += "Tám"; break;
                case 9: words += "Chín"; break;
            }
        }

        console.log(words);
    }
}