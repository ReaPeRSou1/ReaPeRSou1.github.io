
function showAll() { 
    var v = document.getElementsByClassName("vanGuard");
      var i;
      for (i = 0; i < v.length; i++) {
         v[i].style.display = "block";
      }
      var c = document.getElementsByClassName("caster");
      for (i = 0; i < c.length; i++) {
         c[i].style.display = "block";
      }
      var g = document.getElementsByClassName("guard");
      for (i = 0; i < g.length; i++) {
         g[i].style.display = "block";
      }
      var s = document.getElementsByClassName("sniper");
      for (i = 0; i < s.length; i++) {
         s[i].style.display = "block";
      }
      var d = document.getElementsByClassName("defender");
      for (i = 0; i < d.length; i++) {
         d[i].style.display = "block";
      }
      var m = document.getElementsByClassName("medic");
      for (i = 0; i < m.length; i++) {
         m[i].style.display = "block";
      }
      var su = document.getElementsByClassName("supporter");
      for (i = 0; i < su.length; i++) {
         su[i].style.display = "block";
      }
      var sp = document.getElementsByClassName("specialist");
      for (i = 0; i < sp.length; i++) {
         sp[i].style.display = "block";
      }
    document.getElementsByClassName("6")[0].style.display = "block";
    document.getElementsByClassName("5")[0].style.display = "block";
    document.getElementsByClassName("4")[0].style.display = "block";
    document.getElementsByClassName("3")[0].style.display = "block";
    document.getElementsByClassName("2")[0].style.display = "block";
    document.getElementsByClassName("1")[0].style.display = "block";
}

function show6() {
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("_6").className != "clickeD") {
   var v = document.getElementsByClassName("vanGuard");
   var i;
   for (i = 0; i < v.length; i++) {
      v[i].style.display = "block";
   }
   var c = document.getElementsByClassName("caster");
   for (i = 0; i < c.length; i++) {
      c[i].style.display = "block";
   }
   var g = document.getElementsByClassName("guard");
   for (i = 0; i < g.length; i++) {
      g[i].style.display = "block";
   }
   var s = document.getElementsByClassName("sniper");
   for (i = 0; i < s.length; i++) {
      s[i].style.display = "block";
   }
   var d = document.getElementsByClassName("defender");
   for (i = 0; i < d.length; i++) {
      d[i].style.display = "block";
   }
   var m = document.getElementsByClassName("medic");
   for (i = 0; i < m.length; i++) {
      m[i].style.display = "block";
   }
   var su = document.getElementsByClassName("supporter");
   for (i = 0; i < su.length; i++) {
      su[i].style.display = "block";
   }
   var sp = document.getElementsByClassName("specialist");
   for (i = 0; i < sp.length; i++) {
      sp[i].style.display = "block";
   }

    document.getElementsByClassName("6")[0].style.display = "block";

    document.getElementsByClassName("5")[0].style.display = "none";
    document.getElementsByClassName("4")[0].style.display = "none";
    document.getElementsByClassName("3")[0].style.display = "none";
    document.getElementsByClassName("2")[0].style.display = "none";
    document.getElementsByClassName("1")[0].style.display = "none";
}
else {
   showAll();

}
  }

  function show5() {
   document.getElementById("_6").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("_5").className != "clickeD") {
   var v = document.getElementsByClassName("vanGuard");
   var i;
   for (i = 0; i < v.length; i++) {
      v[i].style.display = "block";
   }
   var c = document.getElementsByClassName("caster");
   for (i = 0; i < c.length; i++) {
      c[i].style.display = "block";
   }
   var g = document.getElementsByClassName("guard");
   for (i = 0; i < g.length; i++) {
      g[i].style.display = "block";
   }
   var s = document.getElementsByClassName("sniper");
   for (i = 0; i < s.length; i++) {
      s[i].style.display = "block";
   }
   var d = document.getElementsByClassName("defender");
   for (i = 0; i < d.length; i++) {
      d[i].style.display = "block";
   }
   var m = document.getElementsByClassName("medic");
   for (i = 0; i < m.length; i++) {
      m[i].style.display = "block";
   }
   var su = document.getElementsByClassName("supporter");
   for (i = 0; i < su.length; i++) {
      su[i].style.display = "block";
   }
   var sp = document.getElementsByClassName("specialist");
   for (i = 0; i < sp.length; i++) {
      sp[i].style.display = "block";
   }

    document.getElementsByClassName("5")[0].style.display = "block";

    document.getElementsByClassName("6")[0].style.display = "none";
    document.getElementsByClassName("4")[0].style.display = "none";
    document.getElementsByClassName("3")[0].style.display = "none";
    document.getElementsByClassName("2")[0].style.display = "none";
    document.getElementsByClassName("1")[0].style.display = "none";
   }
   else {showAll();}
  }

  function show4() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("_4").className != "clickeD") {
   var v = document.getElementsByClassName("vanGuard");
   var i;
   for (i = 0; i < v.length; i++) {
      v[i].style.display = "block";
   }
   var c = document.getElementsByClassName("caster");
   for (i = 0; i < c.length; i++) {
      c[i].style.display = "block";
   }
   var g = document.getElementsByClassName("guard");
   for (i = 0; i < g.length; i++) {
      g[i].style.display = "block";
   }
   var s = document.getElementsByClassName("sniper");
   for (i = 0; i < s.length; i++) {
      s[i].style.display = "block";
   }
   var d = document.getElementsByClassName("defender");
   for (i = 0; i < d.length; i++) {
      d[i].style.display = "block";
   }
   var m = document.getElementsByClassName("medic");
   for (i = 0; i < m.length; i++) {
      m[i].style.display = "block";
   }
   var su = document.getElementsByClassName("supporter");
   for (i = 0; i < su.length; i++) {
      su[i].style.display = "block";
   }
   var sp = document.getElementsByClassName("specialist");
   for (i = 0; i < sp.length; i++) {
      sp[i].style.display = "block";
   }

    document.getElementsByClassName("4")[0].style.display = "block";

    document.getElementsByClassName("6")[0].style.display = "none";
    document.getElementsByClassName("5")[0].style.display = "none";
    document.getElementsByClassName("3")[0].style.display = "none";
    document.getElementsByClassName("2")[0].style.display = "none";
    document.getElementsByClassName("1")[0].style.display = "none";
   }
   else {showAll();}
  }

  function show3() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("_3").className != "clickeD") {
   var v = document.getElementsByClassName("vanGuard");
   var i;
   for (i = 0; i < v.length; i++) {
      v[i].style.display = "block";
   }
   var c = document.getElementsByClassName("caster");
   for (i = 0; i < c.length; i++) {
      c[i].style.display = "block";
   }
   var g = document.getElementsByClassName("guard");
   for (i = 0; i < g.length; i++) {
      g[i].style.display = "block";
   }
   var s = document.getElementsByClassName("sniper");
   for (i = 0; i < s.length; i++) {
      s[i].style.display = "block";
   }
   var d = document.getElementsByClassName("defender");
   for (i = 0; i < d.length; i++) {
      d[i].style.display = "block";
   }
   var m = document.getElementsByClassName("medic");
   for (i = 0; i < m.length; i++) {
      m[i].style.display = "block";
   }
   var su = document.getElementsByClassName("supporter");
   for (i = 0; i < su.length; i++) {
      su[i].style.display = "block";
   }
   var sp = document.getElementsByClassName("specialist");
   for (i = 0; i < sp.length; i++) {
      sp[i].style.display = "block";
   }

    document.getElementsByClassName("3")[0].style.display = "block";

    document.getElementsByClassName("6")[0].style.display = "none";
    document.getElementsByClassName("5")[0].style.display = "none";
    document.getElementsByClassName("4")[0].style.display = "none";
    document.getElementsByClassName("2")[0].style.display = "none";
    document.getElementsByClassName("1")[0].style.display = "none";
   }
   else {showAll();}
  }

  function show2() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("_2").className != "clickeD") {
   var v = document.getElementsByClassName("vanGuard");
   var i;
   for (i = 0; i < v.length; i++) {
      v[i].style.display = "block";
   }
   var c = document.getElementsByClassName("caster");
   for (i = 0; i < c.length; i++) {
      c[i].style.display = "block";
   }
   var g = document.getElementsByClassName("guard");
   for (i = 0; i < g.length; i++) {
      g[i].style.display = "block";
   }
   var s = document.getElementsByClassName("sniper");
   for (i = 0; i < s.length; i++) {
      s[i].style.display = "block";
   }
   var d = document.getElementsByClassName("defender");
   for (i = 0; i < d.length; i++) {
      d[i].style.display = "block";
   }
   var m = document.getElementsByClassName("medic");
   for (i = 0; i < m.length; i++) {
      m[i].style.display = "block";
   }
   var su = document.getElementsByClassName("supporter");
   for (i = 0; i < su.length; i++) {
      su[i].style.display = "block";
   }
   var sp = document.getElementsByClassName("specialist");
   for (i = 0; i < sp.length; i++) {
      sp[i].style.display = "block";
   }

    document.getElementsByClassName("2")[0].style.display = "block";

    document.getElementsByClassName("6")[0].style.display = "none";
    document.getElementsByClassName("5")[0].style.display = "none";
    document.getElementsByClassName("3")[0].style.display = "none";
    document.getElementsByClassName("4")[0].style.display = "none";
    document.getElementsByClassName("1")[0].style.display = "none";
   }
   else {showAll();}
  }

  function show1() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("_1").className != "clickeD") {
   var v = document.getElementsByClassName("vanGuard");
   var i;
   for (i = 0; i < v.length; i++) {
      v[i].style.display = "block";
   }
   var c = document.getElementsByClassName("caster");
   for (i = 0; i < c.length; i++) {
      c[i].style.display = "block";
   }
   var g = document.getElementsByClassName("guard");
   for (i = 0; i < g.length; i++) {
      g[i].style.display = "block";
   }
   var s = document.getElementsByClassName("sniper");
   for (i = 0; i < s.length; i++) {
      s[i].style.display = "block";
   }
   var d = document.getElementsByClassName("defender");
   for (i = 0; i < d.length; i++) {
      d[i].style.display = "block";
   }
   var m = document.getElementsByClassName("medic");
   for (i = 0; i < m.length; i++) {
      m[i].style.display = "block";
   }
   var su = document.getElementsByClassName("supporter");
   for (i = 0; i < su.length; i++) {
      su[i].style.display = "block";
   }
   var sp = document.getElementsByClassName("specialist");
   for (i = 0; i < sp.length; i++) {
      sp[i].style.display = "block";
   }

    document.getElementsByClassName("1")[0].style.display = "block";

    document.getElementsByClassName("6")[0].style.display = "none";
    document.getElementsByClassName("5")[0].style.display = "none";
    document.getElementsByClassName("3")[0].style.display = "none";
    document.getElementsByClassName("2")[0].style.display = "none";
    document.getElementsByClassName("4")[0].style.display = "none";
   }
   else {showAll();}
  }

  function showCaster() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("cast").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

      var i;
      var c = document.getElementsByClassName("caster");
      for (i = 0; i < c.length; i++) {
         c[i].style.display = "block";
      }
      var v = document.getElementsByClassName("vanGuard");
      for (i = 0; i < v.length; i++) {
         v[i].style.display = "none";
      }
      var g = document.getElementsByClassName("guard");
      for (i = 0; i < g.length; i++) {
         g[i].style.display = "none";
      }
      var s = document.getElementsByClassName("sniper");
      for (i = 0; i < s.length; i++) {
         s[i].style.display = "none";
      }
      var d = document.getElementsByClassName("defender");
      for (i = 0; i < d.length; i++) {
         d[i].style.display = "none";
      }
      var m = document.getElementsByClassName("medic");
      for (i = 0; i < m.length; i++) {
         m[i].style.display = "none";
      }
      var su = document.getElementsByClassName("supporter");
      for (i = 0; i < su.length; i++) {
         su[i].style.display = "none";
      }
      var sp = document.getElementsByClassName("specialist");
      for (i = 0; i < sp.length; i++) {
         sp[i].style.display = "none";
      }
   } else {showAll();}
  }

  function showGuard() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("guar").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "none";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "block";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "none";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "none";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "none";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "none";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "none";
    }
   } else {showAll();}
}

function showMedic() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("med").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "none";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "none";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "none";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "none";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "block";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "none";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "none";
    }
   } else {showAll();}
}

function showSniper() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("snip").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "none";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "none";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "block";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "none";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "none";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "none";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "none";
    }
   } else {showAll();}
}

function showSpecialist() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("spec").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "none";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "none";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "none";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "none";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "none";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "none";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "block";
    }
   } else {showAll();}
}

function showSupporter() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("def").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("supp").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "none";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "none";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "none";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "none";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "none";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "block";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "none";
    }
   } else {showAll();}
}

function showDefender() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("vg").className = "";
   if (document.getElementById("def").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "none";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "none";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "none";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "block";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "none";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "none";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "none";
    }
   } else {showAll();}
}

function showVanguard() {
   document.getElementById("_6").className = "";
   document.getElementById("_5").className = "";
   document.getElementById("_4").className = "";
   document.getElementById("_3").className = "";
   document.getElementById("_2").className = "";
   document.getElementById("_1").className = "";
   document.getElementById("cast").className = "";
   document.getElementById("guar").className = "";
   document.getElementById("med").className = "";
   document.getElementById("snip").className = "";
   document.getElementById("spec").className = "";
   document.getElementById("supp").className = "";
   document.getElementById("def").className = "";
   if (document.getElementById("vg").className != "clicked") {
   document.getElementsByClassName("6")[0].style.display = "block";
   document.getElementsByClassName("5")[0].style.display = "block";
   document.getElementsByClassName("4")[0].style.display = "block";
   document.getElementsByClassName("3")[0].style.display = "block";
   document.getElementsByClassName("2")[0].style.display = "block";
   document.getElementsByClassName("1")[0].style.display = "block";

    var i;
    var c = document.getElementsByClassName("caster");
    for (i = 0; i < c.length; i++) {
       c[i].style.display = "none";
    }
    var v = document.getElementsByClassName("vanGuard");
    for (i = 0; i < v.length; i++) {
       v[i].style.display = "block";
    }
    var g = document.getElementsByClassName("guard");
    for (i = 0; i < g.length; i++) {
       g[i].style.display = "none";
    }
    var s = document.getElementsByClassName("sniper");
    for (i = 0; i < s.length; i++) {
       s[i].style.display = "none";
    }
    var d = document.getElementsByClassName("defender");
    for (i = 0; i < d.length; i++) {
       d[i].style.display = "none";
    }
    var m = document.getElementsByClassName("medic");
    for (i = 0; i < m.length; i++) {
       m[i].style.display = "none";
    }
    var su = document.getElementsByClassName("supporter");
    for (i = 0; i < su.length; i++) {
       su[i].style.display = "none";
    }
    var sp = document.getElementsByClassName("specialist");
    for (i = 0; i < sp.length; i++) {
       sp[i].style.display = "none";
    }
   } else {showAll();}
}