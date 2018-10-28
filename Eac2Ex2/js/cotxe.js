/**
 * @version1
 * @author Nadia Ameziane
 * First prompt on window load asks for speed
 */
var velo = prompt ("Introdueix velocitat en km per hora (introdueix els decimals amb el caracter '.') ");

var dist = quina_dist();

var temps = calc_temps(velo, dist, temps);

mostra_temps();

/**
 * @function quina_vel
 * @param {number} velo
 * @returns velo
 */
function quina_vel(velo){
    return velo;
    }

/**
 * @function quina_dist
 * @param {integer} dist
 * @returns dist
 */
function quina_dist(dist){
    var dist = prompt ("Introdueix la distància en km (introdueix els decimals amb el caracter '.' ");
    return dist;
}
    

    
/**
 * @function calc_temps
 * @param {integer} temps
 * @returns temps
 */
function calc_temps(velo, dist, temps){
    temps = dist / velo;
    return temps;
}

/**
 * @function mostra_temps
 * prints the final message
 */
function mostra_temps(){
    window.alert("El cotxe trigarà " + temps + " hores en recórrer " + dist + " kilòmetres.");
}

