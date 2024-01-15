import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Profile() {
  return (
      <div>
          {/* Picture */}
    <img style={{width: 212, height: 199, left: 1068, top: 247, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 143}} src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/415356452_879401330591422_948746939450287122_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeECcmyLDJi4LOcbgQopIzSLs8mgHWWXcXazyaAdZZdxdp-a-ZeIYoTOTy2yUAGT0AmmnyHu2qys5trN77BLuHVq&_nc_ohc=nUVatCralJcAX_wkyiD&_nc_ht=scontent.fbkk5-6.fna&oh=03_AdTES4XEPigSIy3n1gzoyY4o1w1Z6jHTI5aR6UASIfaVug&oe=65CA11AF" />
          {/* Dropdown */}
    <div style={{width: 362, height: 45, left: 993, top: 489, position: 'absolute'}}>
        <div style={{width: 362, height: 45, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 14, border: '1px black solid'}} />
        <div style={{left: 23, top: 10, position: 'absolute', color: 'rgba(0, 0, 0, 0.50)', fontSize: 16, fontFamily: 'Kanit', fontWeight: '300', wordWrap: 'break-word'}}>ชื่อพนักงาน</div>
        <img style={{width: 30, height: 30, left: 310, top: 7, position: 'absolute'}}src=" https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/415403148_884487566670740_7782300727647081064_n.png?stp=cp0_dst-png&_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEhw05znihQdMQzz4jEh3QCH-2UCDSXA5Ef7ZQINJcDkTSB12tsY9-azJKrZy3Ij6-HvFi6HUeOioh8Kr3poSYX&_nc_ohc=OajhRnzYWJsAX-rV5pQ&_nc_oc=AQlMUitbpgZTGPjUMJ5Mm_FOVcXvOA_hA-yI_JFXKLCXT391XSb-BMJN7IQnFtVsIpg&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdReOulV9YebJTx4GY5amRYTbz8k16I78A20vkfUoVOC_g&oe=65CA2487">
    </img>
  </div>
   <div style={{width: 362, height: 45, left: 993, top: 554, position: 'absolute'}}>
        <div style={{width: 362, height: 45, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 14, border: '1px black solid'}} />
        <div style={{left: 23, top: 10, position: 'absolute', color: 'rgba(0, 0, 0, 0.50)', fontSize: 16, fontFamily: 'Kanit', fontWeight: '300', wordWrap: 'break-word'}}>รหัสพนักงาน</div>
        <img style={{width: 30, height: 30, left: 310, top: 7, position: 'absolute'}}src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/415403148_884487566670740_7782300727647081064_n.png?stp=cp0_dst-png&_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEhw05znihQdMQzz4jEh3QCH-2UCDSXA5Ef7ZQINJcDkTSB12tsY9-azJKrZy3Ij6-HvFi6HUeOioh8Kr3poSYX&_nc_ohc=OajhRnzYWJsAX-rV5pQ&_nc_oc=AQlMUitbpgZTGPjUMJ5Mm_FOVcXvOA_hA-yI_JFXKLCXT391XSb-BMJN7IQnFtVsIpg&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdReOulV9YebJTx4GY5amRYTbz8k16I78A20vkfUoVOC_g&oe=65CA2487 ">
    </img>
  </div>
          {/* Upload */}
   <div style={{ width: 174, height: 45, left: 1087, top: 642, position: 'absolute' }}>
      <div style={{ width: 174, height: 45, left: 0, top: 0, position: 'absolute', background: '#1C1C1C', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 24 }} />
      <div style={{ width: 67, height: 10, left: 53, top: 12, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Kanit', fontWeight: '400', wordWrap: 'break-word' }}>UPLOAD</div>
  </div>
      </div>
  );
}