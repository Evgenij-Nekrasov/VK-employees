All application data is stored in the main component - the App. The data goes down the hierarchy (components).
An event system is used to update the status, the data comes via props. The main
idea is to centralize the state, the data is stored in one place. An approach has been implemented 
"property-drill". The disadvantage of this approach is that you have to throw props through the entire
component tree and secondly, each component layer may contain properties that it does not need.
![Снимок экрана (621)](https://github.com/Evgenij-Nekrasov/VK_employees/assets/137310332/61051910-11de-416d-a66e-dddfbbdca3a1)
