// Sound effects utility for UI interactions
class SoundEffects {
  private audioContext: AudioContext | null = null;
  private isEnabled: boolean = true;

  constructor() {
    // Initialize audio context on user interaction
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.initAudioContext.bind(this), { once: true });
    }
  }

  private initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Toggle sound on/off
  toggleSound() {
    this.isEnabled = !this.isEnabled;
    localStorage.setItem('soundEnabled', this.isEnabled.toString());
  }

  // Set sound state
  setSoundEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    localStorage.setItem('soundEnabled', enabled.toString());
  }

  // Get sound state
  getSoundEnabled(): boolean {
    const stored = localStorage.getItem('soundEnabled');
    if (stored !== null) {
      this.isEnabled = stored === 'true';
    }
    return this.isEnabled;
  }

  // Play a simple beep sound
  playBeep(frequency: number = 800, duration: number = 100) {
    if (!this.isEnabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration / 1000);
  }

  // Play a click sound
  playClick() {
    this.playBeep(1000, 50);
  }

  // Play a hover sound
  playHover() {
    this.playBeep(600, 30);
  }

  // Play a success sound
  playSuccess() {
    if (!this.isEnabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(523, this.audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659, this.audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(784, this.audioContext.currentTime + 0.2); // G5

    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  // Play a notification sound
  playNotification() {
    if (!this.isEnabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // A4
    oscillator.frequency.setValueAtTime(554, this.audioContext.currentTime + 0.1); // C#5

    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.2);
  }

  // Play a page transition sound
  playPageTransition() {
    if (!this.isEnabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.3);

    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  // Play a scroll sound
  playScroll() {
    if (!this.isEnabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);

    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.02, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }
}

// Create a singleton instance
const soundEffects = new SoundEffects();

export default soundEffects; 