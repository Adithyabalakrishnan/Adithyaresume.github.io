const content = {
    summary: `
        <h2>Summary</h2>
        <p>A resourceful and adaptable newbie prepared to leverage my skills and enthusiasm in a dynamic workplace. 
        I'm excited to embrace challenges, learn from experiences, and contribute creatively to your team's success. 
        I aim to align with the company's values and goals, while continuously improving my abilities and staying abreast of industry trends.</p>
    `,
    projects: `
        <h2>Projects and Presentation</h2>
        <ul>
            <li onclick="showModal('smartIndiaHackathon')"><strong>Smart India Hackathon | 2022</strong><br>
                Project on identifying employee’s individuals face in a group by facial recognition algorithms under ministry of rural department, India.<br>
                Tool used: MATLAB    Team Size: SIX
            </li>
            
            <li onclick="showModal('tutorBunny')"><strong>Tutor Bunny. | 2023</strong><br>
                One campus tool for Educational Purposes and exam Preparations.<br>
                Tool Used: VS code
                <a href="https://Adithyabalakrishnan.github.io/Tuto-Bunny/" target="_blank">Project Link</a><br>
            </li>
            
            <li onclick="showModal('Agriculture Crop Yield Prediction using Machine Learning')"><strong>Final Year Project.| 2023-2024</strong><br>
            The Project aims to Predict the Crop Production thereby to Provide informative insights
            Tool Used: VS code, weka software, anaconda<br>
        </li>
        </ul>
    `,
    education: `
        <h2>Education</h2>
        <ul>
            <li><strong>Bachelor's Degree in Computer Science & Engineering</strong><br>
                Karpagam College of Engineering, 2020-2024, CGPA: 9.2
            </li>
            <li><strong>SSLC</strong> - 92%</li>
            <li><strong>HSC</strong> - 72%</li>
        </ul>
    `,
    skills: `
        <h2>Skills</h2>
        <ul>
        <li>Data Analysis using POWER BI, TABLEAU</li>
        <li>Programming in C</li> 
        <li>Java 8</li>
        <li>SQL Query Language</li>
        <li>HTML, CSS</li>
        <li>XML</li>
        <li>JavaScript - Beginner</li>
        <li>react - Beginner</li>
        </ul>
    `,
    certifications: `
        <h2>Certifications</h2>
        <ul>
        <li>Skillrack Certificates - C Programming, SQL</li>
        <li>HackerRank Certificates - Java, Problem Solving, CSS</li>
        <li>LinkedIn - HTML Assessment</li>
        <li>NPTEL - Programming in Java</li>
        <li>simplilearn - javascript</li>
        </ul>
    `,
    contact: `
        <h2>Contact</h2>
        <p>Email: <a href="mailto:adithyaofficial2023@gmail.com">adithyaofficial2023@gmail.com</a></p>
        <p>Phone: +91 6385508130</p>
        <p>GitHub: <a href="https://github.com/Adithyabalakrishnan" target="_blank">https://github.com/Adithyabalakrishnan</a></p>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const section = item.getAttribute('href').substring(1);
            document.getElementById('game-content').innerHTML = content[section];
        });
    });

    // Load the summary content by default
    document.getElementById('game-content').innerHTML = content.summary;
});

function showModal(project) {
    let modalContent = '';
    switch (project) {
        case 'smartIndiaHackathon':
            modalContent = `
                <h2>Smart India Hackathon | 2022</h2>
                <p>Project on identifying employee’s individuals face in a group by facial recognition algorithms under the Ministry of Rural Development, India.</p>
                <p>Tool used: MATLAB</p>
                <p>Team Size: SIX</p>
            `;
            break;
        case 'tutorBunny':
            modalContent = `
                <h2>Tutor Bunny. | 2023</h2>
                <p>One campus tool for Educational Purposes and exam Preparations.</p>
                <p>Tool Used: VS code</p>
                <p><a href="https://Adithyabalakrishnan.github.io/Tuto-Bunny/" target="_blank">Project Link</a></p>
            `;
            break;
            case 'Agriculture Crop Yield Prediction using Machine Learning':
            modalContent = `
                <h2>Agriculture Crop Yield Prediction using Machine Learning |2024</h2>
                <p>The Project aims to Predict the Crop Production thereby to Provide informative insights</p>
                Tool Used: VS code, weka software, anaconda
            `;
            break;
        default:
            modalContent = '<p>Project details not available.</p>';
    }

    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeModal()">&times;</span>
            ${modalContent}
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.remove();
    }
}
