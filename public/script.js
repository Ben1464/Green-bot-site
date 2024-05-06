const solutions = [
    { 
        problem: "Thrips", 
        infestationimage: "images/thrips.jpg",
        description: "Thrips infestations pose a serious threat to coffee production, impacting on the tree health and berries quality. Vigilance and prompt action are essential for mitigating these pest's impact. By employing early detection methods and implementing appropriate management strategies, coffee farmers can protect their crops and ensure a sustainable yield in the face of thrips infestations.",
        solution: "To eradicate them use Kingcode 10mls + Integra 3mls/20ltrs of water.",
        sprayingintervals: "Repeat spray after 21 days. If the infestation is adverse repeat after 14 days.",
        image: "images/Kingcode-elite-2048x2048.webp",
        availablepacksize:"50mls,100mls,250mls,1ltr.",
        pricerange:"Ksh (200-250),Ksh (300-350),Ksh (650-750),Ksh (2900-3000)"
    },
]

function searchSolutions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const solutionResults = document.getElementById("solutionResults");
    solutionResults.innerHTML = "";

    const filteredSolutions = solutions.filter(solution => {
        const problemName = solution.problem.toLowerCase();
        // Check if the full problem name matches the search input exactly
        return problemName == searchInput;
    });

    if (filteredSolutions.length === 0) {
        solutionResults.innerHTML = "<p>Kindly check your spelling or try rephrasing your search again.</p>";
    } else {
        filteredSolutions.forEach(solution => {
            const solutionDiv = document.createElement("div");
            solutionDiv.classList.add("solution");
            solutionDiv.innerHTML = `
                <h3>${solution.problem}</h3>
                <img src="${solution.infestationimage}" alt="${solution.problem}">
                <h3>Description:</h3>
                <p>${solution.description}</p>
                <h3>Solution:</h3>
                <p>${solution.solution}</p>
                <img src="${solution.image}" alt="${solution.problem}">
                <h3>Spraying Intervals:</h3>
                <p>${solution.sprayingintervals}</p>
                <h3>Available Pack Size:</h3>
                <table>
                    <tr>
                        <th>Pack Size</th>
                        <th>Price Range</th>
                    </tr>
                    ${solution.availablepacksize.split(',').map((size, index) => `
                        <tr>
                            <td>${size}</td>
                            <td>${solution.pricerange.split(',')[index]}</td>
                        </tr>
                    `).join('')}
                </table>`;
            
            solutionResults.appendChild(solutionDiv);
        });
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to handle automatic search based on URL parameter
function handleAutomaticSearch() {
    const searchQuery = getQueryParam('search');
    if (searchQuery) {
        // Perform search based on the query parameter
        document.getElementById("searchInput").value = searchQuery;
        searchSolutions();
    }
}

// Call the function to handle automatic search when the page loads
window.onload = function() {
    handleAutomaticSearch(); // Perform automatic search based on URL parameter
};
