function updateCalendar() {
    const now = new Date(); 
    const date = now.getDate(); 

    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const day = dayNames[now.getDay()];

    const monthNames = ["january", "february", "march", "april", "may", "june", "july", 
        "august", "september", "october", "november", "december"]

    const month = monthNames[now.getMonth()]; 

    document.getElementById('date').textContent = date; 
    document.getElementById('month').textContent = month; 
    document.getElementById('day').textContent = day; 

}

updateCalendar(); 