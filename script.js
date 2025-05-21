function submitQuiz() {
    const answers = {
        q1: 'b',  // The dog
        q2: 'b',  // Happiness
        q3: 'a',  // Play
        q4: 'c',  // Small
        q5: 'b',  // Goes
        q6: 'c',  // Jump
        q7: 'b',  // Good morning
        q8: 'a',  // Can you help me find the library?
        q9: 'a'   // Can you help me?
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    Object.keys(answers).forEach((question) => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct!`;
}
