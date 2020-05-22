$.ajax({
    url: 'https://api.covid19india.org/csv/latest/state_wise.csv',
    dataType: 'text',
}).done(successFunction1);
$.ajax({
    url: 'https://raw.githubusercontent.com/coderrag/covid19/master/instructions.txt',
    dataType: 'text',
}).done(successFunction2)
function successFunction1(data) {
    var states =
    {
        "Andaman and Nicobar Islands": "AN",
        "Andhra Pradesh": "AP",
        "Arunachal Pradesh": "AR",
        "Assam": "AS",
        "Bihar": "BR",
        "Chandigarh": "CG",
        "Chhattisgarh": "CH",
        "Dadra and Nagar Haveli": "DN",
        "Daman and Diu": "DD",
        "Delhi": "DL",
        "Goa": "GA",
        "Gujarat": "GJ",
        "Haryana": "HR",
        "Himachal Pradesh": "HP",
        "Jammu and Kashmir": "JK",
        "Jharkhand": "JH",
        "Karnataka": "KA",
        "Kerala": "KL",
        "Ladakh": "LA",
        "Lakshadweep": "LD",
        "Madhya Pradesh": "MP",
        "Maharashtra": "MH",
        "Manipur": "MN",
        "Meghalaya": "ML",
        "Mizoram": "MZ",
        "Nagaland": "NL",
        "Odisha": "OR",
        "Puducherry": "PY",
        "Punjab": "PB",
        "Rajasthan": "RJ",
        "Sikkim": "SK",
        "State": "State",
        "Tamil Nadu": "TN",
        "Telangana": "TS",
        "Total": "Total",
        "Tripura": "TR",
        "Uttar Pradesh": "UP",
        "Uttarakhand": "UK",
        "West Bengal": "WB"
    };
    function updateHTML(elmId, value) {
        var elem = document.getElementById(elmId);
        if (typeof elem !== 'undefined' && elem !== null) {
            elem.innerHTML = value;
        }
    }
    var table = data.split(/\r?\n|\r/);
    var cur_state = 0;
    for (var i = 0; i < table.length; i++) {
        var row = table[i].split(',');
        if (row.length > 5) {
            var state = row[0];
            var confirmed = row[1];
            var cured = row[2];
            var deaths = row[3];
            var active = row[4];
            var state_id = "state" + String(cur_state);
            var confirmed_id = "confirmed" + String(cur_state);
            var active_id = "active" + String(cur_state);
            var death_id = "death" + String(cur_state);
            var cured_id = "cured" + String(cur_state);
            updateHTML(state_id, states[state]);
            updateHTML(confirmed_id, confirmed);
            updateHTML(cured_id, cured);
            updateHTML(active_id, active);
            updateHTML(death_id, deaths);
            cur_state++;
        }
        if (cur_state > 5) {
            break;
        }
    }
}
function successFunction2(data) {
    var array = data.split(/\r?\n|\r/);
    array = array.filter(function (el) {
        return el != "";
    });
    document.getElementById("info").innerHTML = "Tip: " + array[Math.floor(Math.random() * array.length)];
}