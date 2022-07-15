import { animate } from "./animate";

export const calc = () => {

    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcInput = document.getElementById('calc-input');
    const calcTotal = document.getElementById('calc-total');

    let totalValue = 0;

    const countCalc = () => {
        totalValue = calcInput.value * +calcType.options[calcType.selectedIndex].value * +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

        calcTotal.value = totalValue;

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                calcTotal.value = Math.round(totalValue * progress);
            }
        });
    };

    const selectListeners = (select) => {
        select.addEventListener('change', () => {
            countCalc();
        });
    };

    calcType.setAttribute("required", true);
    calcTypeMaterial.setAttribute("required", true);

    calcInput.addEventListener('input', () => {
        calcInput.value = calcInput.value.replace(/\D/g, '');

        countCalc();
    });

    selectListeners(calcType);
    selectListeners(calcTypeMaterial);
};