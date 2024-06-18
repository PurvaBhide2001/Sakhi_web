const onSearchToSubmit = () => {
    const id = getQueryParamValue("id");
    const exam_id = document.querySelector("#exam_title").value
    if (!exam_id) {
        alert("please select dropdown")
        return
    }
   
    const {
        questions,
        exam_title,
        student
    } = nipunBharatAPI.getQuestions(id, exam_id);
    showQuestionResult(questions)
}