function check() {
  if (document.getElementById("wallet").value !== "") {
    jQuery(".loader").show();
    const options = { method: "GET" };
    var wallet = document.getElementById("wallet").value;
    Cookies.set("wallet", wallet);

    fetch(
      "https://api.opensea.io/api/v1/collections?offset=0&limit=300&asset_owner=" +
        wallet,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        $("#result").html("");
        for (var i = 0; i < response.length; i++) {
          var obj = response[i];

          var floor = jQuery.ajax({
            type: "GET",
            global: false,
            async: false,
            url:
              "https://api.opensea.io/api/v1/collection/" + obj.slug + "/stats",
            success: function (res) {
              return res;
            },
            error: function (error) {
              callbackErr(error, self);
            },
          }).responseJSON.stats.floor_price;

          $("#result").append(
            '<a target="_blank" href="https://opensea.io/collection/' +
              obj.slug +
              '">' +
              "🔗" +
              obj.name +
              "</a>" +
              ' <br><span id="floor">Floor Price: ' +
              floor +
              "</span><br><br>"
          );
          jQuery(".loader").hide();
        }
      })
      .catch((err) => console.error(err));
  } else {
    alert("Please enter your wallet addresss.");
    jQuery(".loader").hide();
  }
}
