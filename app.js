// =====================================
// STUDY DATA INITIALIZATION
// =====================================

function initializeStudy() {

    // Check whether study data already exists
    const existingData = localStorage.getItem("studyData");


    // Only create new data if none exists
    if (!existingData) {

        const studyData = {

            participant: {

                evaluator_id: null,

                background: {

                    current_role: null,
                    years_participating: null

                },

                philosophy: {
    strong_speech: "",
    comparison: "",
    values: ""
}

            },


            sessions: [
        {
            session_id: "S001",
            event: "POI",
            evaluations: []
        },
        {
            session_id: "S002",
            event: "OO",
            evaluations: []
        }
    ],


            metadata: {

                start_time: new Date().toISOString(),

                completion_status: "in_progress"

            }

        };


        // Save object into browser storage
        localStorage.setItem(
            "studyData",
            JSON.stringify(studyData)
        );


        console.log(
            "New study initialized:",
            studyData
        );

    }

    else {

        console.log(
            "Existing study found:",
            JSON.parse(existingData)
        );

    }

}