geotagx.task.run("cropid2", function(question, answer){
    switch (question){
		case 1: // Are there crops in the photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
        case 4: // Are the crops green?
			if (answer === "Yes")
				geotagx.task.showNextQuestion();
			else
				geotagx.task.showQuestion(6);
			break;
		case 5: // Do the plants seem to be wilting? Or their leaves rolling?
			geotagx.task.showQuestion(8);
			break;
        case 2: // Can you see the method of cultivation?
		case 3: // What species of crop are you seeing?
		case 6: // Do you see any green vegetation in the field?
		case 7: // Is the vegetation around the edges of the field green?
		case 8: // Does the crop look like it has been harvested?
		case 9: // Are there any plants missing from the rows?
			geotagx.task.showNextQuestion();
		default:
			break;
	}
});
