export default function findRightExpressions(targetValue) {
    const operators = ['+', '-', ''];
    const rightExpressions = []
    const currentIndex = 8
    const currentExpression = 9
    const currentResult = currentExpression
    const numbers = Array.from({length: 10}, (_, i) => i)

    function resolveExpression(expression) {
       return eval(expression)
    }

    function findAllExpressions(currentIndex, currentExpression, currentResult) {
        if (currentIndex === -1) {
            // Добавляем в массив верных выражений, если результат выражения ровняется targetValue и если все цифры были использованы
            if (currentResult === targetValue) {
                rightExpressions.push(currentExpression + '=' + targetValue);
            }
            return
        }

        for (let operator of operators) {
            const newExpression = currentExpression + operator + numbers[currentIndex];
            const newResult = resolveExpression(newExpression);
            findAllExpressions(currentIndex - 1, newExpression, newResult);
        }
        return Array.from(new Set(rightExpressions))
    }
    return findAllExpressions(currentIndex, currentExpression, currentResult)
}

