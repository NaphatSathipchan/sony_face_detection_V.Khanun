import React from "react";

export default function Picture() {
  return (
    <div>
      {/* Big picture */}
      <div
        style={{
          width: 618,
          height: 428,
          left: 297,
          top: 259,
          position: 'absolute',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 26,
          border: '1px #1C1C1C dotted'
        }}
      />

      <div
        style={{
          left: 428,
          top: 536,
          position: 'absolute',
          textAlign: 'center',
          color: 'rgba(28, 28, 28, 0.57)',
          fontSize: 24,
          fontFamily: 'Kanit',
          fontWeight: '400',
          wordWrap: 'break-word'
        }}
      >
        เลือกรูปภาพจากไฟล์ หรือลากวางที่นี่
      </div>

      <img
              style={{
                  width: 180,
                  height: 142,
                  left: 517,
                  top: 375,
                  position: 'absolute'
              }}
        src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/415311908_361242819938582_8486438164102535623_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGuS2uv-TCmkTnYtnBtzwMaLQs2fylnyKQtCzZ_KWfIpIe2uA9fK8nqcRVKwZaZMlzTV1XPlnDX0HVptNaMYo2R&_nc_ohc=_kf0QksL9wcAX9am01d&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdTFYyMgkMMDX6vKT9q2rGaqaKColj9rqVtrp4LcmFqYCA&oe=65CA1E5C"
        alt="Big Picture"
      />

      {/* Small pictures */}
      {[301, 458, 615, 772].map((leftPosition, index) => (
        <div
          key={index}
          style={{
            width: 133,
            height: 109,
            left: leftPosition,
            top: 724,
            position: 'absolute',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 14,
            border: '1px #1C1C1C dotted'
          }}
        />
      ))}

          <div style={{
              width: 174,
              height: 45,
              left: 1087,
              top: 642,
              position: 'absolute'
          }}>
        <div
          style={{
            width: 174,
            height: 45,
            left: 0,
            top: 0,
            position: 'absolute',
            background: '#1C1C1C',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 24
          }}
        />
        <div
          style={{
            width: 67,
            height: 10,
            left: 53,
            top: 12,
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            fontSize: 14,
            fontFamily: 'Kanit',
            fontWeight: '400',
            wordWrap: 'break-word'
          }}
        >
          UPLOAD
        </div>
      </div>

      {/* Dots */}
      {[236, 929].map((leftPosition, index) => (
          <div key={index} style={{
              width: 41,
              height: 43,
              left: leftPosition,
              top: 757,
              position: 'absolute',
              background: '#D9D9D9'
          }} />
      ))}

      {/* Icons */}
      {[
        {
          src: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.15752-9/414141503_1208246026662471_1881542759161609930_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHS3QWYK2BfskJ2H4mQB61VDUFi8FQ5muINQWLwVDma4nKvSN_uHtqeUxO2crD0IqaW4NkN21yIMa0Nd4I1GUhL&_nc_ohc=X6oCI06YXokAX8xEYfv&_nc_ht=scontent.fbkk5-7.fna&oh=03_AdSQPSCIdYdRMojafysO_EeOUp_U_ArEMSbyIc6yHT5eKw&oe=65CA1FFE',
          left: 935
        },
        {
          src: 'https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/415430627_1103346057769782_6216723496146507240_n.png?stp=cp0_dst-png&_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFknz5pMPZ1N2jFx3ASqTGn1-6gteAqGEjX7qC14CoYSGsrUCDSedypmQWRoTFFTuo-TdBL779l8WsEL7q0U4NN&_nc_ohc=tb4fBYqXTeAAX8_sLst&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdRiVpGXnGPRrpS4f0M3IJKRXz02EQN81305EurgyZNfUQ&oe=65CA1784',
          left: 240
        }
      ].map((icon, index) => (
        <img
          key={index}
              style={{
                  width: 30,
                  height: 30,
                  left: icon.left,
                  top: 762,
                  position: 'absolute',
                  transformOrigin: '0 0'
              }}
          src={icon.src}
          alt={`Icon ${index + 1}`}
        />
      ))}
    </div>
  );
}
