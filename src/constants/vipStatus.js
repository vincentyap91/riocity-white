import bronzeMedal from '../assets/bronze.png';
import silverMedal from '../assets/silver.png';
import goldMedal from '../assets/gold.png';
import platinumMedal from '../assets/platinum.png';
import sapphireMedal from '../assets/sapphire.png';
import diamondMedal from '../assets/diamond.png';

const vipBenefits = {
  Bronze: ['Exclusive reload bonuses', 'Birthday rewards', 'VIP support access'],
  Silver: ['Higher withdrawal limits', 'Monthly reload offers', 'Priority customer service'],
  Gold: ['Exclusive promotions', 'Faster withdrawal processing', 'Personal account manager'],
  Platinum: ['Premium event invitations', 'Custom bonus offers', 'Dedicated host support'],
  Sapphire: ['Elite tier benefits', 'Maximum withdrawal limits', 'VIP concierge service'],
  Diamond: ['Top-tier privileges', 'Priority withdrawals', 'Exclusive bonuses', 'Dedicated host support'],
};

export const vipStatusMap = {
  Bronze: { tier: 'Bronze', label: 'Bronze', medal: bronzeMedal, benefits: vipBenefits.Bronze },
  Silver: { tier: 'Silver', label: 'Silver', medal: silverMedal, benefits: vipBenefits.Silver },
  Gold: { tier: 'Gold', label: 'Gold', medal: goldMedal, benefits: vipBenefits.Gold },
  Platinum: { tier: 'Platinum', label: 'Platinum', medal: platinumMedal, benefits: vipBenefits.Platinum },
  Sapphire: { tier: 'Sapphire', label: 'Sapphire', medal: sapphireMedal, benefits: vipBenefits.Sapphire },
  Diamond: { tier: 'Diamond', label: 'Diamond', medal: diamondMedal, benefits: vipBenefits.Diamond },
};

export function getVipStatus(level = 'Diamond') {
  return vipStatusMap[level] ?? vipStatusMap.Diamond;
}
