(async function () {
  const client = window.FFE_SUPABASE_CLIENT;
  const grid = document.querySelector('.ruby-friendship-branches');
  const template = document.getElementById('ruby-member-template');
  if (!client || !grid || !template) return;
  const { data, error } = await client.from('rubybubys_public_tree')
    .select('member_id,display_name').order('display_name').order('member_id');
  if (error) return;
  for (const member of data) {
    if (!/^MEM-[A-Z0-9][A-Z0-9-]*$/.test(member.member_id)
      || member.member_id === 'MEM-JULIUS' || !member.display_name?.trim()) continue;
    const card = template.content.firstElementChild.cloneNode(true);
    card.href = '../../mitglieder/profil/?mitglied=' + encodeURIComponent(member.member_id);
    card.querySelector('h3').textContent = member.display_name;
    card.querySelector('.ruby-monogram').textContent = [...member.display_name.trim()][0].toLocaleUpperCase();
    grid.insertBefore(card, grid.querySelector('.ruby-member-invitation'));
  }
})();
