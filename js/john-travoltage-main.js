// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
require( [
  'JOIST/SimLauncher',
  'JOHN_TRAVOLTAGE/Strings',
  'JOIST/Sim',
  'JOHN_TRAVOLTAGE/JohnTravoltageImages',
  'JOHN_TRAVOLTAGE/JohnTravoltageScreen'
], function( SimLauncher, Strings, Sim, JohnTravoltageImages, JohnTravoltageScreen ) {
  'use strict';

  //Create and start the sim
  SimLauncher.launch( JohnTravoltageImages, function() {
    new Sim( Strings['johnTravoltage.name'], [new JohnTravoltageScreen()] ).start();
  } );
} );