import Phaser from "phaser";

// Emit events between Vue components and phaser scenes
export const EventBus = new Phaser.Events.EventEmitter();
