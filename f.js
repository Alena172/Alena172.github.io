var f = false;
function toggleDescription(row) {
    var descriptionRow = row.nextElementSibling;
    if (descriptionRow && descriptionRow.classList.contains("description")) {
        descriptionRow.remove();
    } else {
        var description = getDescription(row.cells[0].innerHTML);
        var newRow = document.createElement("tr");
        newRow.classList.add("description");
        var newCell = document.createElement("td");
        newCell.setAttribute("colspan", "3");
        newCell.innerHTML = description;
        newRow.appendChild(newCell);
        row.parentNode.insertBefore(newRow, row.nextSibling);
    }
}
function getDescription(service) {
    switch (service) {
        case "Стрижка женская":
            return "Стрижка – это тот фундамент, который создает форму для всего образа.В услугу также входит мытье волос и укладка по форме стрижки.";
        case "Стрижка горячим лезвием":
            return "Стрижка горячим лезвием обладает не только профилактическим действием от секущихся кончиков, но и лечебным воздействием, т.к. срез каждого волоса запаивается и полезные вещества удерживаются внутри волоса, стимулируя его саморегенерацию.";
        case "Окрашивание в 1 тон короткая":
            return "Окрашивание волос в 1 тон – это нанесение красящего вещества, для получения стойкого, однородного и равномерного оттенка, который придаст живость и яркость вашим волосам";
        case "Мелирование":
            return "Мелирование - метод окрашивания, при котором тонкие пряди волос осветляются, создавая игру света и теней для естественного и объемного эффекта";
        case "Восстановление волос":
            return " процедура, направленная на восстановление и укрепление поврежденных и ослабленных волос. Она сделает ваши волоосы более здоровыми, сильными и блестящими";
        case "Косоплетение":
            return "Наши опытные стилисты создадут для вас неповторимый образ с помощью различных плетений и заплетаний ваших волос.";
        case "Экспресс-укладка":
            return "быстрая и эффективная процедура укладки волос, позволяющая придать им желаемую форму или объем, делая вас готовыми к любому мероприятию или событию";
        default:
            return "";
    }
}
