// Wedding date: 5 December 2026, 12:04 PM IST (UTC+5:30)
export const WEDDING_DATE = new Date('2026-12-05T12:04:00+05:30');

export const WEDDING_INFO = {
  blessing: '॥ Shri Gajanan Prasanna ॥',
  ceremony: 'Wedding Ceremony (Shubh Vivah Sohala)',
  muhurat: 'Abhijit Muhurat',
  invitationFrom: 'The Salve Family (Samast Salve Parivar)',
  invitationMessage:
    'We have joyfully arranged this wedding ceremony and cordially request your gracious presence and blessings on this auspicious occasion.',
  groom: {
    name: 'Abhijeet',
    fatherName: 'Mr. Bala V. Salve',
    motherName: 'Mrs. Sandhya Salve',
    parents: 'Mrs. Sandhya and Mr. Bala V. Salve',
    location: 'Almasahade, currently residing in Wardha',
  },
  bride: {
    name: 'Sakshi',
    fatherName: 'Late Mr. Dinesh M. Thakre',
    motherName: 'Mrs. Priya Thakre',
    parents: 'Mrs. Priya and Late Mr. Dinesh M. Thakre',
    address: 'Narendra Nagar, Nagpur',
  },
  date: {
    full: '5 December 2026',
    day: 'Saturday',
    time: '12:04 PM',
    muhurat: 'Abhijit Muhurat',
    iso: '2026-12-05T12:04:00+05:30',
  },
  venue: {
    name: 'Imperial Garden',
    location: 'Patansawangi, Nagpur',
    city: 'Nagpur',
    state: 'Maharashtra',
    country: 'India',
    fullAddress: 'Imperial Garden, Patansawangi, Nagpur, Maharashtra, India',
    mapsQuery: 'Imperial+Garden+Patansawangi+Nagpur',
  },
} as const;

export function getTimeRemaining() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    total: diff,
  };
}

export function shareOnWhatsApp() {
  const url =
    typeof window !== 'undefined' && window.location.origin !== 'null'
      ? window.location.href
      : 'https://chetan12bhagat.github.io/sahil-weds/';

  const text = encodeURIComponent(
    `॥ Shri Gajanan Prasanna ॥\n\nYou are cordially invited to the Wedding Ceremony (Shubh Vivah Sohala) of Abhijeet & Sakshi!\n\n📅 Saturday, 5 December 2026 | 12:04 PM (Abhijit Muhurat)\n📍 Imperial Garden, Patansawangi, Nagpur\n\n"${WEDDING_INFO.invitationMessage}"\n\n🔗 Wedding Invitation & Venue Link:\n${url}\n\nWith Best Compliments:\n${WEDDING_INFO.invitationFrom}\nAbhijeet & Sakshi`
  );
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

export function openGoogleMaps() {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${WEDDING_INFO.venue.mapsQuery}`,
    '_blank'
  );
}
