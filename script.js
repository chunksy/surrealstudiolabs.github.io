function openTab(event, tabName) {
            // Hide all tab content
            var tabContent = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove("active");
            }

            // Remove active class from all buttons
            var tabButtons = document.getElementsByClassName("tab-button");
            for (var i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }

            // Show the selected tab and mark button as active
            document.getElementById(tabName).classList.add("active");
            event.currentTarget.classList.add("active");
        }
