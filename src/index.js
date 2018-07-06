const convertIpv4toInt32 = (IPv4) => {
  const validIPv4Reg = /^\s*((25[0-5]|2[0-4]\d|[01]?\d\d?)(\s*\.\s*)){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)\s*$/;

  if (!validIPv4Reg.test(IPv4)) {
    throw new Error('Error: Invalid Ipv4!');
  }

  const octets = IPv4.replace(/\s*/g, '').split('.');

  return (+octets[0] * 16777216) + (+octets[1] * 65536) + (+octets[2] * 256) + (+octets[3]);
}

module.exports = convertIpv4toInt32
