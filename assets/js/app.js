let mass = +prompt ('Ваша масса (кг)');
let height = +prompt ('Ваш рост (м)');
  
/*if (typeof(mass) && typeof(height) =="number")*/
let index = mass / (height ** 2);

if ( index <=18.5 )
    {alert (`Ваш индекс: ${Math.floor(index*100)/100}\nВаша масса тела недостаточная`);
    }
else if ((index>=18.5) && (index<=24.9))
    {alert (`Ваш индекс: ${Math.floor(index*100)/100}\nВаша масса тела нормальная`);
    }
else if ((index>=25) && (index<=29.9))
    {alert (`Ваш индекс ${Math.floor(index*100)/100}\n Ваша масса тела избыточная`);
    }
else if ((index>=30) && (index<=34.9))
    {alert (`Ваш индекс ${Math.floor(index*100)/100}\n У Вас ожирение 1 степени`);
    }
else if ((index>=35) && (index<=39.9))
    {alert (`Ваш индекс ${Math.floor(index*100)/100}\n У Вас ожирение 2 степени`);
    }
else if (index>=40)
    {alert (`Ваш индекс ${Math.floor(index*100)/100}\n У Вас ожирение 3 степени`);
    }
else
{alert (`Данные введены некорректно. Пожалуйста, введите числовые значения`);
}



