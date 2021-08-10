function loanCalculator(loanV, periodV, interestRate, repay, loanTotal) {
  const form = $("form");
  form.on("submit", (event) => {
    event.preventDefault();
  });

  const loan = $("input #loanAmount");
  loanV = getElementById("loanAmount").value;
  const period = $("input #month");
  periodV = period.value;

  $("input[type=text]").on("keydown", function (event) {
    var x = $("input[type=text]");

    for (var i = 0; i < x.length; i++) {
      if (x.value == "") {
        loan.addClass("error");
        $("errmsg1").text = "Field cannot be Empty";
        $("button").attr("disabled");
        setTimeout(function () {
          loan.removeClass("error");
          $("errmsg1").text = "";
        }, 500);
      } else {
        loan.addClass("sucess");
        setTimeout(function () {
          loan.removeClass("sucess");
          $("errmsg1").text = "";
        }, 500);
      }

      console.log(x.value);
    }
    // if (loan == "" && period == "") {
    //   loan.addClass("error");
    //
    // } else {
    //     loanAmount.className = "sucess";
    //     var x = $("p");

    //      for (var i = 0; i < x.length; i++) {
    //       x[i].style.visibility = "visible";
    //   }
    //   loanCalc();
    // }
  });

  // $("month").on("sumbit", function(event) {

  //   console.log(event);

  //   if (loan > 5000 && period > 12) {
  //     period.className = "error";
  //     $("errmsg2").text = " A Minimum of N5,000 / Max of 1 Year Period";
  //   } else {
  //     loanAmount.className = "sucess";
  //     var x = $("p");
  //     var i;
  //     for (i = 0; i < x.length; i++) {
  //       x[i].style.visibility = "visible";
  //     }
  //     loanCalc();
  //   }
  // });
  pars;

  interestRate = 0.85;

  repay = loanV / periodV;
  loanTotal = loanV / interestRate;

  repay = Math.round(repay);
  loanTotal = Math.round(loanTotal);

  const currency = function (number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(number);
  };

  document.getElementById("interestRate").innerText = interestRate * 10;
  document.getElementById("loanPerMonth").innerHTML = currency(repay);
  document.getElementById("loanTotal").innerHTML = currency(loanTotal);
  // $("h3 #loanPerMonth").text = currency(repay);
  // $("h3 #loanTotal").innerText = currency(loanTotal);

  return;
}
